import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-12">
          <h1 className="text-[12rem] font-black leading-none tracking-tighter opacity-10 select-none">404</h1>
          <div className="mt-[-6rem] relative">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">Coordinates <span className="text-amber-500">Lost</span></h2>
            <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-muted-foreground">The requested sector does not exist in our archive</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* Decorative Line */}
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
          
          <Link href="/">
            <Button 
              variant="outline" 
              className="h-16 px-12 rounded-none border-white/20 hover:border-amber-500 hover:bg-amber-500/10 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 mr-4 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Return to Base</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Modernist Frame Accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/10" />
    </div>
  )
}
