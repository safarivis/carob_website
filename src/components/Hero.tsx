import { proposal } from "@/data/proposal";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-secondary-500 text-white rounded-full">
                100-YEAR ASSET
              </span>
              <span className="text-primary-300 text-sm">Investment Opportunity</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {proposal.summary.tagline}
            </h1>
            <p className="text-primary-200 mb-6 leading-relaxed">
              {proposal.summary.opportunity}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/financials"
                className="inline-flex items-center px-5 py-2.5 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors"
              >
                View Financials
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/market"
                className="inline-flex items-center px-5 py-2.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Market
              </a>
            </div>
          </div>

          {/* Right: Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            {proposal.investmentSummary.keyPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/5"
              >
                <div className="text-2xl md:text-3xl font-bold text-secondary-400">{point.metric}</div>
                <div className="text-sm font-medium text-white mt-1">{point.label}</div>
                <div className="text-xs text-primary-300">{point.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-primary-200 text-center max-w-3xl mx-auto">
            {proposal.investmentSummary.valueProposition}
          </p>
        </div>
      </div>
    </section>
  );
}
