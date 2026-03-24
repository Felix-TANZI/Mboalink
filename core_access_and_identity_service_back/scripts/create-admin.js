const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@gmail.com';
  const password = 'admin123';
  const fullName = 'System Administrator';

  const existing = await prisma.user.findUnique({ where: { email } });
  const passwordHash = await bcrypt.hash(password, 10);

  if (existing) {
    const updated = await prisma.user.update({
      where: { email },
      data: {
        fullName,
        role: 'ADMIN',
        isActive: true,
        passwordHash,
      },
    });

    console.log(`Admin updated: ${updated.email} (${updated.role})`);
    return;
  }

  const created = await prisma.user.create({
    data: {
      email,
      passwordHash,
      fullName,
      role: 'ADMIN',
      isActive: true,
    },
  });

  console.log(`Admin created: ${created.email} (${created.role})`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
