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
        title="A $500M+ Global Opportunity"
        subtitle="The global carob market is experiencing a renaissance driven by health trends, sustainability demands, and supply constraints in traditional producing regions."
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
            label="Supply Decline"
            value="65"
            unit="%"
            description="Mediterranean cultivation reduction"
          />
          <MetricCard
            label="Opportunity Score"
            value={proposal.market.opportunityScore.overall}
            unit="/5"
            description="Overall market attractiveness"
          />
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
