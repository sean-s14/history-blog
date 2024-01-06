import { numberToOrdinal } from "../src/helpers/ordinalUtils";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Authors
  const author1 = await prisma.author.create({
    data: {
      name: "Sean Stocker",
      email: "sean.stocker14@gmail.com",
    },
  });

  // Articles
  for (let i = 1; i <= 20; i++) {
    const ordinal = numberToOrdinal(i);
    const capitalisedOrdinal =
      ordinal.charAt(0).toUpperCase() + ordinal.slice(1);

    await prisma.article.create({
      data: {
        title: `My ${capitalisedOrdinal} article`,
        slug: `my-${ordinal}-article`,
        description: `This is the description of my ${ordinal} article`,
        content: `This is my ${ordinal} article`,
        thumbnail: `dev/${ordinal}.jpg`,
        tags: ["prisma", "typescript", "nodejs"],
        authorId: author1.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
