export const SkeletonCard = () => {
  return (
    <div className="flex w-80 h-96 flex-col gap-5">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};
