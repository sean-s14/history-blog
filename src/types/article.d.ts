export type TArticle = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  thumbnail: string | null;
  tags: string[];
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
};
