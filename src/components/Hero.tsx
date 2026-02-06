import { proposal } from "@/data/proposal";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-primary-200 text-sm font-medium mb-4 uppercase tracking-wide">
            Investment Opportunity
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {proposal.summary.tagline}
          </h1>
          <p className="text-lg text-primary-100 mb-8 leading-relaxed">
            {proposal.summary.opportunity}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/financials"
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              View Financials
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/market"
              className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore the Opportunity
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
