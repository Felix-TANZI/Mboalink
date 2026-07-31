const prisma = require('../src/config/prisma');
const { allocateCaptivePortalPort, buildCaptivePortalUrl } = require('../src/modules/hotels/captive-portal-port.service');

async function main() {
  const hotels = await prisma.hotel.findMany({
    where: { captivePortalPort: null },
    include: { wifiConfig: { select: { ssid: true } } },
    orderBy: { createdAt: 'asc' },
  });

  if (hotels.length === 0) {
    console.log('All hotels already have a captive portal port.');
    return;
  }

  for (const hotel of hotels) {
    const captivePortalPort = await allocateCaptivePortalPort();
    const updated = await prisma.hotel.update({
      where: { id: hotel.id },
      data: { captivePortalPort },
      include: { wifiConfig: { select: { ssid: true } } },
    });

    console.log(`${updated.name} (${updated.id}) -> ${buildCaptivePortalUrl(updated.captivePortalPort, {
      hotelId: updated.id,
      ssid: updated.wifiConfig?.ssid,
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
