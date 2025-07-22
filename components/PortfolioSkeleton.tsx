import React from "react";

const Shimmer = ({ className }: { className?: string }) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{ backgroundColor: "#e5e7eb" }}
  >
    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />
  </div>
);

const PortfolioSkeleton = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <Shimmer className="h-10 w-1/3 rounded" />
        <Shimmer className="h-6 w-24 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-100 p-4 bg-white"
          >
            <Shimmer className="h-48 w-full rounded-lg mb-4" />
            <Shimmer className="h-6 w-2/3 rounded mb-2" />
            <Shimmer className="h-4 w-1/2 rounded" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSkeleton;
