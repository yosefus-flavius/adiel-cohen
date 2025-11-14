import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
   email: { type: String, required: true },
   name: { type: String, required: true },
   phone: { type: String, required: true },
   subject: { type: String, required: true },
   message: { type: String, required: true },
   isActive: { type: Boolean, default: true },
}, { timestamps: true });

const LeadModel = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

export default LeadModel;
