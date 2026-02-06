"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { Chart, defaultColors } from "@/components/Chart";
import { proposal } from "@/data/proposal";

export default function MarketPage() {
  const segmentChartData = proposal.market.segments.map((s) => ({
    name: s.name,
    size: s.size,
    growth: s.growth,
  }));

  const competitorColumns = [
    { key: "country", header: "Country" },
    {
      key: "volume",
      header: "Volume (tons)",
      align: "right" as const,
      render: (row: typeof proposal.market.competitors[0]) =>
        row.volume.toLocaleString(),
    },
    { key: "share", header: "Share %", align: "right" as const },
    { key: "trend", header: "Trend" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        badge="Market Analysis"
        title="Global Market Context"
        subtitle="Understanding the carob market opportunity to validate the 20 ha prototype. Market data from Mordor Intelligence, FAO, and Tridge (2024)."
      />

      {/* Key Market Metrics */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Market Value"
            value={`$${proposal.market.size.value}`}
            unit="M+"
            description="Global carob market (2024)"
          />
          <MetricCard
            label="Growth Rate"
            value={proposal.market.cagr}
            unit="% CAGR"
            description="Projected annual growth"
          />
          <MetricCard
            label="Supply Shift"
            value="65"
            unit="%"
            description="Mediterranean decline (supply moving to Turkey/Morocco)"
          />
          <MetricCard
            label="Opportunity Score"
            value={proposal.market.opportunityScore.overall}
            unit="/5"
            description="Overall market attractiveness"
          />
        </div>
      </section>

      {/* Market Data Note */}
      <section className="mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-lg">ℹ️</span>
            <div>
              <p className="text-sm font-medium text-blue-800 mb-1">Market Data Context</p>
              <p className="text-sm text-blue-700">
                Market size estimates range from $247M to $500M depending on segment definitions and sources. The 65% Mediterranean decline represents a <strong>supply shift</strong> to Turkey (+5.2%/yr) and Morocco (63% of exports), not a supply gap. Competition exists in these growing regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Segments</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Chart
                data={segmentChartData}
                type="bar"
                xKey="name"
                yKeys={[{ key: "size", color: defaultColors.primary, name: "Size ($M)" }]}
                formatY={(v) => `$${v}M`}
                height={250}
              />
            </div>
            <div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-gray-600">Segment</th>
                    <th className="text-right py-2 font-semibold text-gray-600">Size</th>
                    <th className="text-right py-2 font-semibold text-gray-600">Growth</th>
                    <th className="text-left py-2 pl-4 font-semibold text-gray-600">Our Play</th>
                  </tr>
                </thead>
                <tbody>
                  {proposal.market.segments.map((seg) => (
                    <tr key={seg.name} className="border-b border-gray-100">
                      <td className="py-3">{seg.name}</td>
                      <td className="py-3 text-right tabular-nums">${seg.size}M</td>
                      <td className="py-3 text-right tabular-nums">{seg.growth}%</td>
                      <td className="py-3 pl-4">
                        <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                          {seg.play}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Production by Country</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <DataTable data={proposal.market.competitors} columns={competitorColumns} />
        </div>
      </section>

      {/* Market Trends */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Market Trends</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {proposal.market.trends.map((trend) => (
            <div
              key={trend.name}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:border-primary-200 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 mb-2">{trend.name}</h4>
              <p className="text-sm text-gray-600">{trend.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Pricing */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Pricing</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Price Ranges by Product */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Current Price Ranges (USD/kg)</h4>
            <div className="space-y-3">
              {proposal.market.pricing.priceRanges.map((item) => (
                <div key={item.product} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <span className="font-medium text-gray-900">{item.product}</span>
                    <p className="text-xs text-gray-500">{item.notes}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-primary-700">
                      ${item.pricePerKg.min.toFixed(2)} - ${item.pricePerKg.max.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Volatility & Market Size */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Market Size Projection</h4>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-primary-700">${proposal.market.pricing.marketSize2025}M</p>
                  <p className="text-sm text-gray-500">2025 Market Size</p>
                </div>
                <div className="text-center px-4">
                  <span className="inline-flex items-center text-secondary-600 font-semibold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <p className="text-xs text-gray-500">{proposal.market.pricing.cagr}% CAGR</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-secondary-600">${proposal.market.pricing.projectedSize2035}M</p>
                  <p className="text-sm text-gray-500">2035 Projection</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Historical Price Volatility</h4>
              <p className="text-sm text-gray-600 mb-3">{proposal.market.pricing.historicalVolatility.note}</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">2022</p>
                  <p className="font-semibold text-gray-700">${proposal.market.pricing.historicalVolatility.range2022.min}-${proposal.market.pricing.historicalVolatility.range2022.max}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">2023</p>
                  <p className="font-semibold text-gray-700">${proposal.market.pricing.historicalVolatility.range2023.min}-${proposal.market.pricing.historicalVolatility.range2023.max}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">2024</p>
                  <p className="font-semibold text-gray-700">${proposal.market.pricing.historicalVolatility.range2024.min}-${proposal.market.pricing.historicalVolatility.range2024.max}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Implication */}
        <div className="mt-6 bg-primary-50 rounded-xl p-6 border border-primary-100">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-primary-800 mb-1">Conservative Projections with Upside Potential</h4>
              <p className="text-sm text-primary-700">{proposal.market.pricing.implication}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Assessment */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Opportunity Assessment</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(proposal.market.opportunityScore)
              .filter(([key]) => key !== "overall")
              .map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-primary-700 mb-1">
                    {value}/5
                  </div>
                  <div className="text-xs text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <div className="inline-flex items-center gap-3 bg-primary-50 px-6 py-3 rounded-lg">
              <span className="text-sm font-medium text-primary-700">Overall Score:</span>
              <span className="text-2xl font-bold text-primary-800">
                {proposal.market.opportunityScore.overall}/5
              </span>
              <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded">
                Attractive Opportunity
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
