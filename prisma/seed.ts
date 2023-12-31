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
  const article1 = await prisma.article.create({
    data: {
      title: "My first article",
      slug: "my-first-article",
      description: "This is the description of my first article",
      content: "This is my first article",
      tags: ["prisma", "typescript", "nodejs"],
      authorId: author1.id,
    },
  });
  const article2 = await prisma.article.create({
    data: {
      title: "My Second article",
      slug: "my-second-article",
      description: "This is the description of my second article",
      content: "This is my second article",
      tags: ["nextjs", "react", "nextauthjs"],
      authorId: author1.id,
    },
  });
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
