import Spline from '@splinetool/react-spline';
import { BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#1F2326] text-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-black bg-[#FFB400] px-2.5 py-1 rounded mb-4">
            <BadgeCheck className="h-4 w-4" aria-hidden /> Enterprise
          </p>
          <h1
            className="text-[40px] sm:text-[48px] leading-tight font-bold tracking-wider"
            style={{ letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'Orbitron, Oswald, JetBrains Mono, system-ui, sans-serif' }}
          >
            Precision. Purpose. Protection.
          </h1>
          <p className="mt-4 text-[#C9B99A] text-lg">
            We build rugged, trustworthy drone systems and cinematic solutions that strengthen Nepal’s safety, rescue, and creative capacity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3" id="request">
            <a href="#contact" className="inline-flex items-center justify-center bg-[#4B5320] hover:brightness-110 text-white font-bold uppercase tracking-wider px-5 py-3 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]">
              Request Demo
            </a>
            <a href="#training" className="inline-flex items-center justify-center border-2 border-[#C9B99A] text-[#C9B99A] hover:bg-[#C9B99A]/10 font-semibold px-5 py-3 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]">
              Book Training
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm text-[#6C757D]">
            <div>
              <dt className="font-semibold text-[#C9B99A]">Mission</dt>
              <dd className="font-mono text-sm text-[#6C757D]">Design, train, and deliver reliable UAV systems and cinematic services that work in the harshest environments.</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#C9B99A]">Vision</dt>
              <dd className="font-mono text-sm text-[#6C757D]">Nepal’s trusted maker of rugged, enterprise drones that protect, rescue, and capture the world.</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-lg overflow-hidden">
          <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F2326] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
}
