import { Shield, Radar, Wrench, Film, Map, AlertTriangle, Download } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Rugged Airframes',
    desc: 'Weather-sealed, field-serviceable frames built for Himalayan conditions. Rated for dust, rain, and high-altitude deployments.',
  },
  {
    icon: Radar,
    title: 'Secure Comms',
    desc: 'Encrypted links, long-range telemetry, and reliable fail-safes designed for enterprise and public safety teams.',
  },
  {
    icon: Wrench,
    title: 'Service & MRO',
    desc: 'Rapid turnarounds, parts availability, and disciplined maintenance protocols to keep fleets mission-ready.',
  },
  {
    icon: Film,
    title: 'Cinematic Ops',
    desc: 'Stabilized payloads and expert crews for film, commercials, and live broadcast with military-grade safety.',
  },
  {
    icon: Map,
    title: 'Mapping & SAR',
    desc: 'Orthomosaic mapping, thermal search, and night ops with trained pilots and standard operating procedures.',
  },
  {
    icon: AlertTriangle,
    title: 'Compliance First',
    desc: 'Respectful authority, local regulations, airspace coordination, and transparent documentation.',
  },
];

export default function Features() {
  return (
    <section id="capabilities" className="bg-[#0f1214] text-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-wider"
          style={{ letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'Orbitron, Oswald, JetBrains Mono, system-ui, sans-serif' }}
        >
          Capabilities
        </h2>
        <p className="mt-3 text-[#C9B99A] max-w-2xl">
          Engineering enterprise-grade UAVs with disciplined processes and a service-first mindset.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-[#1F2326] p-6 shadow-md">
              <Icon className="h-6 w-6 text-[#FFB400]" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold tracking-wide" style={{ letterSpacing: '0.02em' }}>{title}</h3>
              <p className="mt-2 text-sm text-[#6C757D]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:flex sm:items-center sm:justify-between rounded-lg border border-[#C9B99A]/30 bg-[#1F2326] p-6">
          <div>
            <h3 className="text-lg font-semibold text-[#C9B99A]">Spec Sheet</h3>
            <p className="text-sm text-[#6C757D]">Short technical summary with monotone values; detailed PDF available on request.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm bg-[#4B5320] hover:brightness-110 text-white px-4 py-2 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]"
            aria-label="Download spec PDF"
          >
            <Download className="h-4 w-4" /> Download spec (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
