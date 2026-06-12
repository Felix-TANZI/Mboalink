const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
}

async function main() {
  const email = requiredEnv('USER_EMAIL').trim().toLowerCase();
  const password = requiredEnv('USER_PASSWORD');
  const fullName = process.env.USER_FULL_NAME || email;
  const role = process.env.USER_ROLE || 'RECEPTIONIST';
  const hotelId = process.env.USER_HOTEL_ID || null;

  if (!['ADMIN', 'CLIENT', 'RECEPTIONIST', 'SUPPORT', 'HOTEL_IT'].includes(role)) {
    throw new Error('USER_ROLE must be ADMIN, CLIENT, RECEPTIONIST, SUPPORT or HOTEL_IT');
  }

  if ((role === 'RECEPTIONIST' || role === 'HOTEL_IT') && !hotelId) {
    throw new Error('USER_HOTEL_ID is required for RECEPTIONIST and HOTEL_IT users');
  }

  if (hotelId) {
    const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
    if (!hotel) {
      throw new Error(`Hotel not found: ${hotelId}`);
    }
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.upsert({
    where: { email },
    create: {
      email,
      passwordHash,
      fullName,
      role,
      hotelId,
      isActive: true,
    },
    update: {
      passwordHash,
      fullName,
      role,
      hotelId,
      isActive: true,
    },
  });

  console.log(`User ready: ${user.email} (${user.role}) hotel=${user.hotelId || 'none'}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
