"use server";

import prisma from "@/lib/prisma";

export async function getRecentArticles() {
  const articles = await prisma.article.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return articles;
}

export async function getArticle(slug: string) {
  const article = await prisma.article.findUnique({
    where: {
      slug: slug,
    },
  });

  return article;
}
