import { PrismaClient } from '../src/generated/prisma/client'


const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  const defaultcetegories = [
    "Brazilian Literature", 
    "Science Fiction", 
    "Magical Realism", 
    "Fiction", 
    "Fantasy", 
    "Romance", 
    "Biography", 
    "History", 
    "Self-help", 
    "Technology", 
    "Programming", 
    "Business", 
    "Psychology", 
    "Philosophy", 
    "Poetry"
  ]

  for(const category in defaultcetegories){
    await prisma.category.create({
        data: {
            name: defaultcetegories[category],
        },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });