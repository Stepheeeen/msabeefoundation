'use client'

import { useEffect } from 'react'
import { RefreshCcw, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('[GLOBAL_ERROR]', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 relative">
       <div className="absolute inset-0 opacity-[0.02] pointer-events-none grayscale" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

       <div className="max-w-md w-full text-center space-y-12">
          <div className="flex justify-center">
             <div className="w-20 h-20 bg-destructive/10 flex items-center justify-center border border-destructive/20">
                <AlertTriangle className="w-10 h-10 text-destructive" />
             </div>
          </div>

          <div className="space-y-4">
             <h2 className="text-3xl font-black uppercase tracking-tighter">System <span className="text-destructive">Anomaly</span></h2>
             <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-bold leading-loose">
                An unexpected interruption occurred in the foundation's digital terminal. Our logistics team has been notified.
             </p>
          </div>

          <div className="flex flex-col items-center gap-6 pt-6">
             <Button 
                onClick={() => reset()}
                className="h-16 px-12 rounded-none bg-foreground text-background font-black uppercase tracking-[0.3em] hover:scale-105 transition-all text-[10px]"
             >
                <RefreshCcw className="w-4 h-4 mr-4" />
                Reload Terminal
             </Button>
             
             <p className="text-[8px] font-mono opacity-30 uppercase tracking-widest">
                Digest ID: {error.digest || 'ROOT_CRASH'}
             </p>
          </div>
       </div>
    </div>
  )
}
