import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-gray-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          הדף לא נמצא
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          מצטערים, לא הצלחנו למצוא את הכתבה המבוקשת.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/blog"
            className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            חזרה לבלוג
          </Link>
          <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
            דף הבית <span aria-hidden="true">&larr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
