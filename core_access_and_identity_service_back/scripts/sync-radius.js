const prisma = require('../src/config/prisma');
const { syncAllGuestPassesToRadius } = require('../src/modules/radius/radius.service');

async function main() {
  const result = await syncAllGuestPassesToRadius({
    requestId: 'radius-sync-script',
  });

  console.log(`Radius sync complete: ${result.synced} synced, ${result.removed} removed, ${result.count} total`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
