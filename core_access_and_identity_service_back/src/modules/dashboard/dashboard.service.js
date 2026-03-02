const prisma = require('../../config/prisma');

async function getOverview(hotelId) {
  const whereHotel = hotelId ? { hotelId } : {};

  const [
    hotels,
    rooms,
    wifiConfigs,
    guestPasses,
    activeSessions,
    devices,
    recentAlerts,
  ] = await Promise.all([
    prisma.hotel.count({ where: hotelId ? { id: hotelId } : undefined }),
    prisma.room.count({ where: whereHotel }),
    prisma.wifiConfig.count({ where: whereHotel }),
    prisma.guestPass.count({ where: whereHotel }),
    prisma.loginSession.count({ where: { ...whereHotel, status: 'ONLINE' } }),
    prisma.device.groupBy({ by: ['status'], where: whereHotel, _count: { _all: true } }),
    prisma.alert.findMany({
      where: whereHotel,
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
  ]);

  return {
    hotels,
    rooms,
    wifiConfigs,
    guestPasses,
    activeSessions,
    devicesByStatus: devices,
    recentAlerts,
  };
}

module.exports = {
  getOverview,
};
