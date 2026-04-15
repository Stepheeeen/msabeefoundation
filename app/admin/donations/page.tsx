export const dynamic = 'force-dynamic'
import { db } from '@/lib/db'
import { format } from 'date-fns'
import { CheckCircle2, Clock, XCircle, Search, Filter, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

async function getDonations() {
  return await db.donation.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function DonationsPage() {
  const donations = await getDonations()

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'SUCCESS': return <CheckCircle2 className="w-4 h-4 text-green-500" />
      case 'FAILED': return <XCircle className="w-4 h-4 text-red-500" />
      default: return <Clock className="w-4 h-4 text-yellow-500" />
    }
  }

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase">Inflow <span className="text-primary">Ledger</span></h1>
          <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Verified transaction history and donor telemetry</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 px-8 rounded-md font-bold uppercase tracking-widest border-border hover:bg-secondary">
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="flex gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by email or transaction reference..."
            className="pl-12 h-14 bg-card border-border rounded-md uppercase text-[10px] font-bold tracking-widest"
          />
        </div>
        <Button variant="outline" className="h-14 px-8 rounded-md font-bold uppercase tracking-widest border-border">
          <Filter className="w-4 h-4 mr-2" /> Filter
        </Button>
      </div>

      <div className="soft-card overflow-hidden border border-border rounded-md bg-card shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-secondary/20 border-b border-border">
            <tr>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">Date / Time</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">Donor</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">Status</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">Reference</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {donations.length > 0 ? donations.map((donation: any) => (
              <tr key={donation.id} className="hover:bg-secondary/10 transition-colors group">
                <td className="p-6">
                  <div className="text-[11px] font-bold">{format(new Date(donation.createdAt), 'MMM dd, yyyy')}</div>
                  <div className="text-[9px] text-muted-foreground mt-1 font-bold">{format(new Date(donation.createdAt), 'HH:mm:ss')}</div>
                </td>
                <td className="p-6">
                  <div className="text-[11px] font-bold text-foreground">{donation.customerName || 'Anonymous'}</div>
                  <div className="text-[10px] text-muted-foreground opacity-60 font-medium">{donation.email}</div>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(donation.status)}
                    <span className="text-[10px] font-black uppercase tracking-widest">{donation.status}</span>
                  </div>
                </td>
                <td className="p-6">
                  <div className="text-[9px] font-mono text-muted-foreground overflow-hidden text-ellipsis max-w-[150px]">{donation.txRef}</div>
                </td>
                <td className="p-6 text-right font-black text-lg tracking-tighter">
                  <span className="text-[10px] text-primary uppercase mr-2 tracking-widest">{donation.currency}</span>
                  {donation.amount.toLocaleString()}
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="p-20 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Clock className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">No transaction history detected</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
