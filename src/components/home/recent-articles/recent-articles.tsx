import { getRecentArticles } from "@/app/actions";
import Image from "next/image";

// TODO: Add placeholder image in S3 bucket
// TODO: Add function to retrieve placeholder image
export default async function RecentArticles() {
  const articles = await getRecentArticles();

  return (
    <div className="mt-6 pt-6 flex flex-wrap gap-8 items-center justify-center text-lg">
      {articles.map((article) => (
        <Image
          key={article.id}
          src={article.thumbnail || "/images/placeholder.png"}
          alt={article.title}
          width={300}
          height={225}
          className="rounded-lg"
        />
      ))}
    </div>
  );
}
