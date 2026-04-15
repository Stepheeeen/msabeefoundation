export const dynamic = 'force-dynamic'
import { db } from '@/lib/db'
import { AdminDashboardUI } from '@/components/admin/admin-dashboard-ui'

async function getStats() {
  const [donations, galleryCount, totalDonations] = await Promise.all([
    db.donation.findMany({
      where: { status: 'SUCCESS' },
      orderBy: { createdAt: 'desc' },
      take: 5
    }),
    db.galleryItem.count(),
    db.donation.aggregate({
      where: { status: 'SUCCESS' },
      _sum: { amount: true }
    })
  ])

  return {
    recentDonations: donations,
    galleryCount,
    totalDonations: totalDonations._sum.amount || 0,
    activeCampaigns: 4 // This is a static count for foundation areas
  }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  return <AdminDashboardUI stats={stats} />
}
