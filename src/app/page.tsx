import { Suspense } from "react";
import RecentArticles from "@/components/home/recent-articles/recent-articles";
import RecentArticlesSkeleton from "@/components/home/recent-articles/skeleton";
import Welcome from "@/components/home/welcome";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-12 xs:py-16 sm:py-20 px-6 xs:px-10 sm:p-14">
      <Welcome />

      {/* Recent Posts */}
      <section className="mt-28">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-stone-200">
          Recent Posts
        </h2>
        <div>
          <Suspense fallback={<RecentArticlesSkeleton />}>
            <RecentArticles />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
