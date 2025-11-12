import { Card } from "@/components/ui/card"
import { Skeleton } from "./skeleton"

export function LatestBlogsSkeleton() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16 gap-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card 
              key={item} 
              className="rounded-2xl p-8 shadow-xs h-full"
            >
              <Skeleton className="h-64 mb-6 rounded-xl" />
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}