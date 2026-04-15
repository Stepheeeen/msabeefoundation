'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Landmark, ArrowDownCircle, Clock, CheckCircle2, AlertCircle, RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

export default function FinancialHub() {
  const [balance, setBalance] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [balRes, histRes] = await Promise.all([
        fetch('/api/finance/balance'),
        fetch('/api/finance/withdraw/history') // I need to create this API
      ]);
      setBalance(await balRes.json());
      setHistory(await histRes.json());
    } catch (error) {
      toast.error('Logistics telemetry failed to sync');
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;
    
    setProcessing(true);
    try {
      const res = await fetch('/api/finance/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseFloat(amount), currency: 'NGN' })
      });
      
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err);
      }
      
      toast.success('Withdrawal protocol initialized');
      setAmount('');
      fetchData();
    } catch (error: any) {
      toast.error(error.message || 'Withdrawal failed');
    } finally {
      setProcessing(false);
    }
  };

  if (loading && !balance) return <div className="text-[10px] font-black uppercase animate-pulse">Accessing Secure Ledger...</div>;

  return (
    <div className="space-y-16">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase text-foreground">Financial <span className="text-primary">Hub</span></h1>
          <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Settlement logistics and capital redistribution</p>
        </div>
        <Button variant="outline" onClick={fetchData} className="h-12 w-12 rounded-md border-border">
           <RefreshCcw className={`w-4 h-4 text-primary ${loading ? 'animate-spin' : ''}`} />
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Balance Card */}
        <div className="soft-card p-12 bg-primary/5 border border-primary/20 rounded-md relative overflow-hidden flex flex-col justify-center min-h-[400px]">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Landmark className="w-40 h-40" />
           </div>
           <div className="relative z-10">
              <div className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-8">Settled Vault Balance</div>
              <div className="text-7xl font-black tracking-tighter mb-4">
                <span className="text-2xl mr-4 opacity-40 uppercase">{balance?.currency}</span>
                {balance?.available_balance.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest mb-12">Total available for administrative withdrawal</p>
              
              <form onSubmit={handleWithdraw} className="space-y-6 max-w-sm">
                <div className="space-y-4">
                   <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Redistribution Amount</Label>
                   <Input 
                    type="number" 
                    placeholder="Enter amount (e.g. 5000)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="h-16 text-3xl font-black bg-background border-primary/20 rounded-none tabular-nums"
                   />
                </div>
                <Button 
                  disabled={processing || !amount}
                  className="w-full h-16 rounded-none font-black uppercase tracking-[0.2em] bg-primary text-primary-foreground shadow-2xl hover:scale-105 transition-all text-xs"
                >
                  <ArrowDownCircle className="w-5 h-5 mr-3" /> {processing ? 'PROCESSING...' : 'INITIATE WITHDRAWAL'}
                </Button>
              </form>
           </div>
        </div>

        {/* Info Card */}
        <div className="soft-card p-12 bg-card border border-border rounded-md flex flex-col justify-center">
           <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                 <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest">Protocol <span className="text-primary">Notes</span></h3>
           </div>
           <ul className="space-y-8">
              {[
                "Withdrawals are processed via Flutterwave Transfers.",
                "Minimum withdrawal threshold is ₦1,000.",
                "Funds are sent to the official settlement account on file.",
                "Processing time varies by bank (typically 1-24 hours)."
              ].map((note, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm font-medium text-muted-foreground leading-relaxed">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                   {note}
                </li>
              ))}
           </ul>
        </div>
      </div>

      {/* History */}
      <div className="space-y-8">
        <h3 className="text-2xl font-black uppercase tracking-widest">Withdrawal <span className="text-primary">Logs</span></h3>
        <div className="soft-card overflow-hidden border border-border rounded-md bg-card shadow-xl">
           <table className="w-full border-collapse">
              <thead className="bg-secondary/20 border-b border-border">
                 <tr>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-left">Initiated</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-left">Target Account</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-left">Status</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-right">Volume</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-border">
                 {history.length > 0 ? history.map((w) => (
                   <tr key={w.id} className="hover:bg-secondary/5 transition-colors">
                      <td className="p-6 whitespace-nowrap">
                         <div className="text-[11px] font-bold">{format(new Date(w.createdAt), 'MMM dd, yyyy')}</div>
                         <div className="text-[9px] text-muted-foreground font-bold mt-1 uppercase tracking-widest opacity-60">REF: {w.reference || 'N/A'}</div>
                      </td>
                      <td className="p-6">
                         <div className="text-[11px] font-bold uppercase">{w.bankName}</div>
                         <div className="text-[10px] text-muted-foreground tracking-widest">{w.accountNumber}</div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                           {w.status === 'SUCCESS' ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <Clock className="w-3 h-3 text-yellow-500" />}
                           <span className="text-[10px] font-black uppercase tracking-widest">{w.status}</span>
                        </div>
                      </td>
                      <td className="p-6 text-right font-black text-lg tracking-tighter">
                         <span className="text-[10px] text-primary uppercase mr-2 tracking-widest">{w.currency}</span>
                         {w.amount.toLocaleString()}
                      </td>
                   </tr>
                 )) : (
                   <tr>
                      <td colSpan={4} className="p-20 text-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest">No withdrawal activity cached</td>
                   </tr>
                 )}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
