"use server";

import prisma from "@/lib/prisma";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/lib/s3client";

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
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: article.thumbnail || "",
      Expires: 60 * 5, // 5 minutes
    };

    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(s3Client, command, { expiresIn: 300 });
    article.thumbnail = url;
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
