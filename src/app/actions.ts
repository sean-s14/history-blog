"use server";

import prisma from "@/lib/prisma";
import { getSignedUrl } from "@/helpers/getSignedUrl";

// TODO: Instead of throwing error if s3 bucket is not set, we can use a default image

export async function getRecentArticles() {
  const articles = await prisma.article.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!process.env.AWS_S3_BUCKET) {
    throw new Error("Missing AWS_S3_BUCKET env var");
  }

  // Get the signed url for each thumbnail in articles
  for (let article of articles) {
    article.thumbnail = await getSignedUrl(article);
  }

  return articles;
}

export async function getArticles(page: number, pageSize: number) {
  console.log("Cache check, page", page);
  const skip = (page - 1) * pageSize;

  // retrieve articles with pagination
  const articles = await prisma.article.findMany({
    skip: skip,
    take: pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!process.env.AWS_S3_BUCKET) {
    throw new Error("Missing AWS_S3_BUCKET env var");
  }

  // TODO: This is not efficient, we should use batchGetItem
  // TODO: Find a way to cache the signed urls
  // Get the signed url for each thumbnail in articles
  for (let article of articles) {
    article.thumbnail = await getSignedUrl(article);
  }

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

export async function getArticleSize() {
  const count = await prisma.article.count();
  return count;
}
