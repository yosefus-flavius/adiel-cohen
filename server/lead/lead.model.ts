import mongoose from 'mongoose';

// Only name and phone are required; email, subject and message are optional.
const LeadSchema = new mongoose.Schema({
   email: { type: String, default: '' },
   name: { type: String, required: true },
   phone: { type: String, required: true },
   subject: { type: String, default: 'פנייה מהאתר' },
   message: { type: String, default: '' },
   isActive: { type: Boolean, default: true },
}, { timestamps: true });

const LeadModel = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

export default LeadModel;
