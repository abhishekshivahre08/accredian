import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Lead from '@/lib/models/Lead'
import { z } from 'zod'

const leadSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().min(2, 'Company name required'),
  designation: z.string().min(2, 'Designation required'),
  teamSize: z.enum(['1-10', '11-50', '51-200', '201-500', '500+']),
  trainingNeeds: z.string().min(1, 'Please select training needs'),
  message: z.string().optional().default(''),
  source: z.string().optional().default('website'),
})

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()
    const validated = leadSchema.parse(body)

    const existingLead = await Lead.findOne({ email: validated.email })
    if (existingLead) {
      return NextResponse.json(
        { success: false, message: 'A lead with this email already exists. We will get back to you soon.' },
        { status: 409 }
      )
    }

    const lead = await Lead.create(validated)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Our enterprise team will contact you within 24 hours.',
        data: { id: lead._id, email: lead.email, fullName: lead.fullName },
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error.errors },
        { status: 400 }
      )
    }
    console.error('Lead creation error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')

    const query: Record<string, string> = {}
    if (status) query.status = status

    const skip = (page - 1) * limit
    const [leads, total] = await Promise.all([
      Lead.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Lead.countDocuments(query),
    ])

    return NextResponse.json({
      success: true,
      data: leads,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error('Leads fetch error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}
