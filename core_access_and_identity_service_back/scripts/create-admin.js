const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function getAdminEmails() {
  const rawEmails = process.env.ADMIN_EMAIL || process.env.ADMIN_EMAILS || 'admin@gmail.com';
  return rawEmails
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

async function upsertAdmin(email, password, fullName) {
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
    return updated;
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
  return created;
}

async function main() {
  const emails = getAdminEmails();
  const password = process.env.ADMIN_PASSWORD || 'admin123';
  const fullName = process.env.ADMIN_FULL_NAME || 'System Administrator';

  for (const email of emails) {
    await upsertAdmin(email, password, fullName);
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
