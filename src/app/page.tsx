import { Hero } from "@/components/Hero";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeader } from "@/components/SectionHeader";
import { proposal } from "@/data/proposal";
import Link from "next/link";

export default function Home() {
  const metrics = [
    {
      label: "Market Size",
      value: `$${proposal.keyMetrics.marketSize.value}`,
      unit: "M+",
      description: "Global carob market (2024)",
    },
    {
      label: "Investment",
      value: `$${proposal.keyMetrics.investment.value}`,
      unit: "M",
      description: "Total capital required",
    },
    {
      label: "Projected IRR",
      value: proposal.keyMetrics.irr.value,
      unit: "%",
      description: "Base case (20-year)",
    },
    {
      label: "CO2 Sequestered",
      value: proposal.keyMetrics.co2.value,
      unit: " tons/yr",
      description: "At maturity (250 ha)",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Investment Summary Banner */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary-500 text-white rounded-full mb-4">
              100-YEAR ASSET
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {proposal.investmentSummary.headline}
            </h2>
            <p className="text-primary-200 max-w-2xl mx-auto">
              {proposal.investmentSummary.valueProposition}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {proposal.investmentSummary.keyPoints.map((point, i) => (
              <div key={i} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur">
                <div className="text-3xl md:text-4xl font-bold text-secondary-400">{point.metric}</div>
                <div className="text-sm font-semibold text-white mt-1">{point.label}</div>
                <div className="text-xs text-primary-300">{point.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Key Metrics */}
        <section className="mb-16">
          <SectionHeader
            badge="Key Metrics"
            title="Investment at a Glance"
            subtitle="A compelling agricultural opportunity with strong returns and measurable impact"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <SectionHeader
            badge="The Solution"
            title="Commercial Carob Production"
          />
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-6">
              {proposal.summary.solution}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Climate Suitability", desc: "Ideal conditions for drought-tolerant carob" },
                { title: "Cost Advantage", desc: "Lower land and labor costs vs. Europe" },
                { title: "Regional Positioning", desc: "Proximity to European and Middle East markets" },
                { title: "ESG Credentials", desc: "Climate-positive agriculture with social impact" },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-primary-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-primary-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="mb-16">
          <SectionHeader
            badge="Timing"
            title="Why Now?"
            subtitle="The window for new entrants is closing"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {proposal.whyNow.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-secondary-200 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary-100 text-secondary-700 font-bold text-sm mb-3">
                  {i + 1}
                </span>
                <h4 className="font-semibold text-gray-900 mb-1">{item.point}</h4>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-16">
          <SectionHeader
            badge="Roadmap"
            title="Key Milestones"
            subtitle="From establishment to mature operations"
          />
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {proposal.milestones.map((m) => (
                <div
                  key={m.year}
                  className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="w-20 text-sm font-semibold text-primary-700">
                    Year {m.year}
                  </span>
                  <span className="text-gray-700">{m.milestone}</span>
                  {m.year === 12 && (
                    <span className="ml-auto px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                      Break-even
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Sections */}
        <section>
          <SectionHeader
            title="Explore the Proposal"
            subtitle="Dive deeper into each aspect of this opportunity"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { href: "/market", title: "Market Analysis", desc: "Market size, segments, competitors, and trends" },
              { href: "/technical", title: "Technical Plan", desc: "Cultivation, yields, processing, and infrastructure" },
              { href: "/financials", title: "Financial Model", desc: "Investment, projections, scenarios, and returns" },
              { href: "/impact", title: "Impact & ESG", desc: "Environmental, social, and governance benefits" },
              { href: "/conclusion", title: "Conclusion", desc: "Summary, next steps, downloads, and contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <span className="inline-flex items-center text-sm text-primary-600 mt-4 font-medium">
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
