import { unstable_cache } from "next/cache";

export interface GoogleReview {
  id: string;
  author: string;
  photo?: string;
  rating: number;
  text: string;
  relativeTime?: string;
}

export interface GoogleReviewsData {
  rating: number;
  total: number;
  mapsUrl?: string;
  reviews: GoogleReview[];
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  googleMapsLinks?: { reviewsUri?: string };
  reviews?: {
    name: string;
    rating: number;
    relativePublishTimeDescription?: string;
    text?: { text: string };
    originalText?: { text: string };
    authorAttribution?: { displayName?: string; photoUri?: string };
  }[];
}

async function fetchGoogleReviews(): Promise<GoogleReviewsData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return null;

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=he`,
    {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,googleMapsLinks.reviewsUri,reviews",
      },
    },
  );

  // Throw so unstable_cache keeps the previous value instead of caching a failure.
  if (!res.ok) throw new Error(`Places API ${res.status}`);

  const data: PlacesResponse = await res.json();
  const reviews = (data.reviews ?? [])
    .map((r) => ({
      id: r.name,
      author: r.authorAttribution?.displayName ?? "",
      photo: r.authorAttribution?.photoUri,
      rating: r.rating,
      text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
      relativeTime: r.relativePublishTimeDescription,
    }))
    .filter((r) => r.text && r.author && r.rating >= 4);

  if (!reviews.length || !data.rating) return null;

  return {
    rating: data.rating,
    total: data.userRatingCount ?? reviews.length,
    mapsUrl: data.googleMapsLinks?.reviewsUri ?? data.googleMapsUri,
    reviews,
  };
}

const cached = unstable_cache(fetchGoogleReviews, ["google-reviews"], {
  revalidate: 60 * 60 * 24,
  tags: ["google-reviews"],
});

/** Real Google Business reviews, or null when not configured / unavailable. */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  try {
    // Skip the 24h cache locally so changes to the key/place show up immediately.
    return process.env.NODE_ENV === "development" ? await fetchGoogleReviews() : await cached();
  } catch {
    return null;
  }
}
