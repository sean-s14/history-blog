function SkeletonIndividual() {
  return <div className="bg-stone-500 rounded-lg h-[225px] w-[300px]"></div>;
}

export default function RecentArticlesSkeleton() {
  return (
    <div className="animate-pulse pt-6 flex flex-wrap gap-8 items-center justify-center">
      <SkeletonIndividual />
      <SkeletonIndividual />
      <SkeletonIndividual />
    </div>
  );
}
