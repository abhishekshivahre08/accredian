import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Lead from '@/lib/models/Lead'

export async function GET() {
  try {
    await connectDB()

    const [total, newLeads, contacted, qualified, converted] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({ status: 'new' }),
      Lead.countDocuments({ status: 'contacted' }),
      Lead.countDocuments({ status: 'qualified' }),
      Lead.countDocuments({ status: 'converted' }),
    ])

    // Recent leads (last 7 days)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const recentLeads = await Lead.countDocuments({ createdAt: { $gte: sevenDaysAgo } })

    return NextResponse.json({
      success: true,
      data: { total, newLeads, contacted, qualified, converted, recentLeads },
    })
  } catch (error) {
    console.error('Stats fetch error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
