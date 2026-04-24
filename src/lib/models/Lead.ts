import mongoose, { Schema, Document, Model } from 'mongoose'
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export interface ILead extends Document {
  fullName: string
  email: string
  phone: string
  company: string
  designation: string
  teamSize: string
  trainingNeeds: string
  message: string
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'converted'
  createdAt: Date
  updatedAt: Date
}

const LeadSchema = new Schema<ILead>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    teamSize: {
      type: String,
      required: true,
      enum: ['1-10', '11-50', '51-200', '201-500', '500+'],
    },
    trainingNeeds: { type: String, required: true },
    message: { type: String, default: '' },
    source: { type: String, default: 'website' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'converted'],
      default: 'new',
    },
  },
  { timestamps: true }
)

LeadSchema.index({ email: 1 })
LeadSchema.index({ createdAt: -1 })
LeadSchema.index({ status: 1 })

const Lead: Model<ILead> =
  mongoose.models.Lead ?? mongoose.model<ILead>('Lead', LeadSchema)

export default Lead
