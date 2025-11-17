import mongoose from 'mongoose';

export interface IFlash   {
  title: string;
  img?: string;
  content: string;
  category: string;
  isActive: boolean;
}

export interface IFlashDoc extends IFlash, mongoose.Document {}

const FlashSchema = new mongoose.Schema<IFlash>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const flashModel = mongoose.models.Flash || mongoose.model<IFlash>('Flash', FlashSchema);
export default flashModel;