export type TAuthor = {
  id: string;
  name: string;
  email: string;
  articles: TArticle[] | null;
  createdAt: Date;
  updatedAt: Date;
};
