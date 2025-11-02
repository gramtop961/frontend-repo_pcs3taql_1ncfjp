import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1F2326] text-white selection:bg-[#FFB400] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="training" className="bg-[#1F2326]">
          <div className="mx-auto max-w-[1200px] px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl border border-[#C9B99A]/30 bg-[#0f1214] p-6">
              <h2
                className="text-2xl md:text-3xl font-bold tracking-wider text-[#C9B99A]"
                style={{ letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'Orbitron, Oswald, JetBrains Mono, system-ui, sans-serif' }}
              >
                Pilot Training
              </h2>
              <p className="mt-3 text-sm text-[#6C757D]">
                Structured, mission-focused courses for teams and creators. Emphasis on safety, SOPs, and decision-making under pressure.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-[#C9B99A] list-disc list-inside">
                <li>Public Safety & SAR</li>
                <li>Cinematic Operations</li>
                <li>Mapping & Survey</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="inline-flex items-center justify-center bg-[#4B5320] hover:brightness-110 text-white font-bold uppercase tracking-wider px-5 py-3 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]">
                  Book Training
                </a>
                <a href="#capabilities" className="inline-flex items-center justify-center border-2 border-[#C9B99A] text-[#C9B99A] hover:bg-[#C9B99A]/10 font-semibold px-5 py-3 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]">
                  View Modules
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f1214] p-6">
              <h3 className="text-lg font-semibold tracking-wide text-white">Standards</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <SpecItem label="Airframes" value="IP54" />
                <SpecItem label="Comms" value="AES-256" />
                <SpecItem label="Ops Altitude" value="> 3,000 m" />
                <SpecItem label="Endurance" value="45–60 min" />
                <SpecItem label="Payload" value="Gimbal/IR/Mapping" />
                <SpecItem label="SOP" value="Checklists, Briefs" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function SpecItem({ label, value }) {
  return (
    <div className="rounded-lg bg-[#1F2326] border border-white/10 p-4">
      <div className="text-xs text-[#6C757D] uppercase tracking-wider">{label}</div>
      <div className="mt-1 font-mono text-sm text-[#C9B99A]">{value}</div>
    </div>
  );
}

export default App;
