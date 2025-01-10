export default function Loading() {
  return (
    <main className="min-h-screen py-8">
      <article className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-8" />
            <div className="relative h-[60vh] rounded-2xl overflow-hidden bg-gray-200 animate-pulse" />
          </header>

          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24">
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden bg-gray-200 animate-pulse" />
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
