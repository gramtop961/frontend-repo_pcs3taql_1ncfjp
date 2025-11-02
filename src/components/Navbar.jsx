import { Shield, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#1F2326] text-white sticky top-0 z-50 border-b border-white/5">
      <div className="mx-auto max-w-[1200px] px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F2326] rounded">
          <Shield className="h-7 w-7 text-[#FFB400]" aria-hidden />
          <span className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Orbitron, Oswald, JetBrains Mono, system-ui, sans-serif' }}>
            GARUDX
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#capabilities" className="text-[#C9B99A] hover:text-white transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400] rounded px-1 py-1">Capabilities</a>
          <a href="#training" className="text-[#C9B99A] hover:text-white transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400] rounded px-1 py-1">Training</a>
          <a href="#contact" className="text-[#C9B99A] hover:text-white transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400] rounded px-1 py-1">Contact</a>
          <a href="#request" className="inline-flex items-center font-extrabold uppercase tracking-wider bg-[#4B5320] hover:brightness-110 text-white px-4 py-2 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]">
            Request Demo
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#C9B99A] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]"
          onClick={() => setOpen(v => !v)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#1F2326]">
          <div className="mx-auto max-w-[1200px] px-6 py-4 grid gap-3">
            <a href="#capabilities" className="text-[#C9B99A] hover:text-white">Capabilities</a>
            <a href="#training" className="text-[#C9B99A] hover:text-white">Training</a>
            <a href="#contact" className="text-[#C9B99A] hover:text-white">Contact</a>
            <a href="#request" className="inline-flex w-max items-center font-extrabold uppercase tracking-wider bg-[#4B5320] hover:brightness-110 text-white px-4 py-2 rounded-md">Request Demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
