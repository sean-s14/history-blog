import { getRecentArticles } from "@/app/actions";
import Image from "next/image";

export default async function RecentArticles() {
  const articles = await getRecentArticles();

  return (
    <div className="mt-6 pt-6 flex flex-wrap gap-8 items-center justify-center text-lg">
      {articles.map((article) => (
        <Image
          key={article.id}
          src={article.thumbnail || "/images/placeholder.png"}
          alt={article.title}
          width={400}
          height={300}
          className="rounded-lg"
        />
      ))}
    </div>
  );
}
