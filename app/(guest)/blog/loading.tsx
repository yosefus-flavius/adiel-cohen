export default function Loading() {
  return (
    <main className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="h-12 w-48 bg-muted rounded animate-pulse mx-auto mb-8" />
          <div className="relative">
            <div className="w-full h-10 bg-muted rounded animate-pulse" />
            <div className="absolute end-4 top-2 h-5 w-5 bg-muted rounded animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group">
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden bg-muted animate-pulse" />
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-16 bg-muted rounded animate-pulse" />
                </div>
                <div className="h-6 w-3/4 bg-muted rounded animate-pulse mb-3" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[1, 2, 3].map((tag) => (
                    <div
                      key={tag}
                      className="h-6 w-16 bg-muted rounded-full animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
