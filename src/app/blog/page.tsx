import { getArticles, getArticleSize } from "../actions";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  // PaginationEllipsis,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  // DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default async function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page: number = parseInt(searchParams["page"] ?? "1");
  const page_size: number = parseInt(searchParams["page_size"] ?? "5");

  const articles = await getArticles(page, page_size);
  const articleSize = await getArticleSize();

  const numberOfPages = Math.ceil(articleSize / page_size);
  const maxPagesDisplayed = 3;

  // Calculate the range of pages to display
  let startPage = Math.max(1, page - 1);
  let endPage = Math.min(numberOfPages, page + 1);

  // Ensure at least 3 pages are displayed
  if (endPage - startPage < maxPagesDisplayed - 1) {
    if (startPage === 1) {
      endPage = Math.min(numberOfPages, startPage + maxPagesDisplayed - 1);
    } else {
      startPage = Math.max(1, endPage - maxPagesDisplayed - 1);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="mb-10">
        {articles.map((article) => (
          <div key={article.id} className="mt-6 flex gap-4">
            <Image
              key={article.id}
              src={article.thumbnail || "/default.jpg"}
              alt={article.title}
              width={240}
              height={180}
              className="rounded-lg"
            />
            <div className="">
              <h1 className="text-xl">{article.title}</h1>
              <p className="text-sm">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button variant="ghost" disabled={page === 1} className="p-0">
              <Link
                href={`/blog?page=${page - 1}`}
                className="px-4 py-2 ps-4 pe-4"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Link>
            </Button>
          </PaginationItem>

          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          ).map((pageNum) => (
            <PaginationItem key={pageNum}>
              <Button
                variant={page === pageNum ? "outline" : "ghost"}
                size="default"
                className="p-0"
              >
                <Link
                  href={`/blog?page=${pageNum}`}
                  className="px-4 py-2 ps-4 pe-4"
                >
                  {pageNum}
                </Link>
              </Button>
            </PaginationItem>
          ))}

          {/* TODO: Display ellipsis if there are more pages */}
          {/* TODO: Display final page if there are more pages */}

          <PaginationItem>
            <Button
              variant="ghost"
              disabled={page === numberOfPages}
              className="p-0"
            >
              <Link
                href={`/blog?page=${page + 1}`}
                className="px-4 py-2 ps-4 pe-4"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
