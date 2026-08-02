const prisma = require('../src/config/prisma');
const { allocateCaptivePortalPort, buildCaptivePortalUrl } = require('../src/modules/hotels/captive-portal-port.service');
const { ensureDefaultCaptivePortal } = require('../src/modules/captive-portal-instances/captive-portal-instance.service');

async function main() {
  const hotels = await prisma.hotel.findMany({
    include: {
      wifiConfig: { select: { ssid: true } },
      captivePortals: true,
    },
    orderBy: { createdAt: 'asc' },
  });

  if (hotels.length === 0) {
    console.log('No hotel found.');
    return;
  }

  for (const hotel of hotels) {
    const defaultPortal = await ensureDefaultCaptivePortal(hotel.id, {
      name: 'Client',
      ssid: hotel.wifiConfig?.ssid,
    });

    if (!hotel.captivePortalPort) {
      await prisma.hotel.update({
        where: { id: hotel.id },
        data: { captivePortalPort: defaultPortal.port },
      });
    }
    console.log(`${hotel.name} (${hotel.id}) -> ${buildCaptivePortalUrl(defaultPortal.port, {
      portalId: defaultPortal.id,
      hotelId: hotel.id,
      ssid: defaultPortal.ssid,
    })}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
