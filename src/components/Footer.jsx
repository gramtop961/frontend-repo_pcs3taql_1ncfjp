export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1F2326] text-[#C9B99A] border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 py-12 grid gap-8 md:grid-cols-2">
        <div>
          <h4
            className="text-2xl font-bold tracking-wider text-white"
            style={{ letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'Orbitron, Oswald, JetBrains Mono, system-ui, sans-serif' }}
          >
            GarudX
          </h4>
          <p className="mt-2 text-sm text-[#6C757D] max-w-md">
            Confident. Disciplined. Technical. Service-first. Proudly Nepali.
          </p>
        </div>
        <form className="grid gap-3">
          <label className="text-sm font-medium" htmlFor="message">Request a quote</label>
          <textarea
            id="message"
            rows={3}
            placeholder="Describe your mission (location, payload, timeline)."
            className="w-full rounded-md bg-[#0f1214] text-white placeholder:text-[#6C757D] border border-white/10 p-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]"
          />
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Work email"
              aria-label="Work email"
              className="flex-1 rounded-md bg-[#0f1214] text-white placeholder:text-[#6C757D] border border-white/10 p-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#4B5320] hover:brightness-110 text-white font-bold uppercase tracking-wider px-5 py-3 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB400]"
            >
              Get Quote
            </button>
          </div>
          <p className="text-xs text-[#6C757D]">We respect regulations and privacy. You’ll hear from us within 24 hours.</p>
        </form>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-4 text-xs text-[#6C757D] flex items-center justify-between">
          <span>© {new Date().getFullYear()} GarudX Labs • Kathmandu, Nepal</span>
          <a href="#" className="hover:text-[#C9B99A]">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
