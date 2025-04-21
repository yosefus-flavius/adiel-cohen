import mongoose from 'mongoose';

export interface IBlog extends mongoose.Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  date: Date;
  category: string;
  isActive: boolean;
  tags: string[];
  author: string;
}

const BlogSchema = new mongoose.Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  coverImage: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
  tags: [{ type: String }],
  isActive: { type: Boolean, default: true },
  author: { type: String, required: true , default: 'עדיאל כהן'}
}, { timestamps: true });

const BlogModel = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default BlogModel;