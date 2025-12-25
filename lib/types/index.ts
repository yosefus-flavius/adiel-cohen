export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  tags: string[];
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface ContactInfo {
  _id: string;
  phone: string;
  email: string;
  address: string;
  googleMap: string;
  socialMedia: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface AboutSection {
  _id: string;
  title: string;
  content: string;
  vision: string;
  experience: string;
  image: string;
  backImage: string;
  unionImage: string;
}
