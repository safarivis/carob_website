"use client";

import { SectionHeader } from "@/components/SectionHeader";

const benchmarks = [
  {
    name: "Carob (This Proposal)",
    irr: "12-18%",
    payback: "19 years",
    risk: "High",
    source: "Proposal Analysis",
    sourceUrl: "/financials",
    highlight: true,
  },
  {
    name: "U.S. Farmland (NCREIF 1992-2023)",
    irr: "10.15% avg",
    payback: "N/A (appreciation)",
    risk: "Low",
    source: "NCREIF Farmland Index",
    sourceUrl: "https://user.ncreif.org/data-products/farmland/",
  },
  {
    name: "Almond Orchards (California)",
    irr: "13.3%",
    payback: "8-10 years",
    risk: "Medium",
    source: "FarmFundr",
    sourceUrl: "https://www.farmfundr.com/blog/almond-orchard-investment",
  },
  {
    name: "Pistachio Orchards (USA)",
    irr: "10-14%",
    payback: "8-9 years",
    risk: "Medium",
    source: "Gold Leaf Farming",
    sourceUrl: "https://www.goldleaf.ag/blog/freakonomics-the-economics-of-everyday-things-pistachios",
  },
  {
    name: "Olive Groves (Spain/Portugal)",
    irr: "11-20%",
    payback: "~10 years",
    risk: "Medium",
    source: "Beka Finance / EFA News",
    sourceUrl: "https://www.efanews.eu/item/34670-private-equity-bets-on-spanish-and-portuguese-olive-oil.html",
  },
  {
    name: "African Avocado Farms",
    irr: "40%+",
    payback: "3-4 years",
    risk: "High",
    source: "M&J Group Africa",
    sourceUrl: "https://mjgroup.africa/high-return-agricultural-investments-in-africa/",
  },
  {
    name: "NCREIF Permanent Cropland (2024)",
    irr: "-10.2%",
    payback: "N/A",
    risk: "High",
    source: "FarmTogether",
    sourceUrl: "https://farmtogether.com/learn/blog/breaking-down-the-2024-ncreif-farmland-performance-key-insights-and-trends",
    warning: true,
  },
];

const keyInsights = [
  {
    title: "Payback Period Comparison",
    finding: "Carob's 19-year payback is approximately 2x longer than comparable tree crops",
    details: [
      "Almonds/Pistachios: 8-10 years",
      "Olives: ~10 years",
      "Most tree crops: 6-10 years",
      "Carob (this proposal): 19 years",
    ],
    severity: "warning",
  },
  {
    title: "IRR is Competitive IF Achieved",
    finding: "12% conservative IRR matches NCREIF's long-term farmland average",
    details: [
      "12% conservative = NCREIF 30-year average",
      "18% target = Above-average for agriculture",
      "Almond/Pistachio comparison: 10-14%",
    ],
    severity: "neutral",
  },
  {
    title: "Permanent Crops Underperforming",
    finding: "NCREIF Permanent Cropland: -10.2% in 2024 (6th consecutive year of decline)",
    details: [
      "20.4% decline in permanent crop values since 2018",
      "Annual cropland +31.8% over same period",
      "Cautionary signal for new tree crop investments",
    ],
    severity: "critical",
  },
  {
    title: "Emerging Market Risk Premium",
    finding: "African agriculture can deliver 40%+ returns but with corresponding risk",
    details: [
      "Political instability in Sudan",
      "Egypt: better infrastructure but water concerns (Nile/GERD)",
      "No proven carob production in target regions",
    ],
    severity: "warning",
  },
];

const treeLifespanComparison = [
  { crop: "Carob", lifespan: "100+ years", payback: "19 years", ratio: "5.3x" },
  { crop: "Pistachio", lifespan: "50-100 years", payback: "8-9 years", ratio: "6-11x" },
  { crop: "Olive", lifespan: "50-100 years", payback: "10 years", ratio: "5-10x" },
  { crop: "Almond", lifespan: "20-25 years", payback: "8-10 years", ratio: "2-3x" },
];

export default function BenchmarksPage() {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "border-red-200 bg-red-50";
      case "warning": return "border-orange-200 bg-orange-50";
      default: return "border-blue-200 bg-blue-50";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        badge="Industry Benchmarks"
        title="Comparative Investment Analysis"
        subtitle="How does this carob investment compare to other agricultural opportunities? Data from verified sources including NCREIF, UC Davis, and industry reports."
      />

      {/* Important Notice */}
      <section className="mb-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-amber-600 text-lg">⚠️</span>
            <div>
              <p className="text-sm font-medium text-amber-800 mb-1">Independent Analysis</p>
              <p className="text-sm text-amber-700">
                This page presents third-party benchmark data to provide context for evaluating the carob investment proposal.
                All sources are linked for verification. Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Comparison Table */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Returns Comparison</h3>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Investment Type</th>
                <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Historical IRR</th>
                <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Payback Period</th>
                <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Risk Level</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {benchmarks.map((item) => (
                <tr
                  key={item.name}
                  className={`hover:bg-gray-50 ${item.highlight ? "bg-primary-50" : ""} ${item.warning ? "bg-red-50" : ""}`}
                >
                  <td className="px-4 py-3">
                    <span className={`text-sm ${item.highlight ? "font-bold text-primary-800" : "text-gray-900"}`}>
                      {item.name}
                    </span>
                    {item.highlight && (
                      <span className="ml-2 px-2 py-0.5 bg-primary-200 text-primary-800 text-xs font-medium rounded">
                        This Proposal
                      </span>
                    )}
                    {item.warning && (
                      <span className="ml-2 px-2 py-0.5 bg-red-200 text-red-800 text-xs font-medium rounded">
                        Caution
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`font-medium ${item.irr.startsWith("-") ? "text-red-600" : "text-gray-900"}`}>
                      {item.irr}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-700">{item.payback}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(item.risk)}`}>
                      {item.risk}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 hover:text-primary-800 hover:underline"
                    >
                      {item.source}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Insights */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h3>
        <div className="space-y-4">
          {keyInsights.map((insight) => (
            <div
              key={insight.title}
              className={`rounded-xl border p-6 ${getSeverityColor(insight.severity)}`}
            >
              <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
              <p className="text-sm text-gray-700 mb-3">{insight.finding}</p>
              <ul className="space-y-1">
                {insight.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tree Lifespan Value Comparison */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">The Lifespan Advantage</h3>
        <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl p-6 text-white">
          <p className="text-primary-200 mb-6">
            While carob has a longer payback, its exceptional lifespan creates long-term value.
            The key question: does the 100+ year productive life compensate for the 19-year payback?
          </p>
          <div className="bg-white/10 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-primary-200">Crop</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-primary-200">Productive Life</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-primary-200">Payback</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-primary-200">Life/Payback Ratio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {treeLifespanComparison.map((item) => (
                  <tr key={item.crop} className={item.crop === "Carob" ? "bg-white/10" : ""}>
                    <td className="px-4 py-3 text-sm font-medium">{item.crop}</td>
                    <td className="px-4 py-3 text-center text-sm">{item.lifespan}</td>
                    <td className="px-4 py-3 text-center text-sm">{item.payback}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="px-2 py-1 bg-secondary-500 text-white text-sm font-bold rounded">
                        {item.ratio}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-primary-300 mt-4">
            * Life/Payback ratio indicates productive years after breakeven. Higher = more post-payback value.
            Carob&apos;s 5.3x ratio is in line with other tree crops despite longer payback.
          </p>
        </div>
      </section>

      {/* NCREIF Historical Data */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">NCREIF Farmland Historical Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">30-Year Track Record (1992-2023)</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-600">Average Annual Return</span>
                <span className="text-xl font-bold text-green-700">10.15%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Positive Years</span>
                <span className="text-lg font-bold text-gray-900">28 of 30</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Annual Volatility</span>
                <span className="text-lg font-bold text-gray-900">6-7%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">S&P 500 Volatility (comparison)</span>
                <span className="text-lg font-bold text-gray-900">16-18%</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">2024 Performance (Recent)</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="text-sm text-gray-600">Total Return</span>
                <span className="text-xl font-bold text-red-700">-1.03%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Income Return</span>
                <span className="text-lg font-bold text-green-600">+2.49%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Capital Appreciation</span>
                <span className="text-lg font-bold text-red-600">-3.46%</span>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-xs text-amber-800">
                  <strong>Note:</strong> First negative annual return in NCREIF&apos;s 30+ year history.
                  Permanent cropland hit hardest at -10.2%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Assessment */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Honest Assessment</h3>
        <div className="bg-gray-900 text-white rounded-xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-300">Factor</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-300">Carob Proposal</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-300">Typical Tree Crop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-300">Payback Period</td>
                  <td className="px-4 py-3 text-center font-bold text-red-400">19 years</td>
                  <td className="px-4 py-3 text-center text-green-400">8-10 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-300">Expected IRR</td>
                  <td className="px-4 py-3 text-center text-yellow-400">12-18%</td>
                  <td className="px-4 py-3 text-center text-yellow-400">10-15%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-300">Tree Lifespan</td>
                  <td className="px-4 py-3 text-center font-bold text-green-400">100+ years</td>
                  <td className="px-4 py-3 text-center text-gray-400">20-30 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-300">Water Needs</td>
                  <td className="px-4 py-3 text-center text-green-400">Low</td>
                  <td className="px-4 py-3 text-center text-yellow-400">Medium-High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-300">Proven in Region</td>
                  <td className="px-4 py-3 text-center text-red-400">No</td>
                  <td className="px-4 py-3 text-center text-gray-400">Varies</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-300">Exit Liquidity</td>
                  <td className="px-4 py-3 text-center text-red-400">Very Low</td>
                  <td className="px-4 py-3 text-center text-yellow-400">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section>
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-3">Bottom Line</h3>
          <p className="text-sm text-primary-800 mb-4">
            The carob proposal&apos;s <strong>19-year payback is approximately 2x longer</strong> than comparable tree crop investments.
            The compensation is the exceptional longevity (100+ years vs 20-30 years) and low water requirements.
          </p>
          <p className="text-sm text-primary-700">
            However, NCREIF data showing permanent cropland declining 20% since 2018 suggests the current environment
            for tree crop investments is challenging. This should factor into timing and risk assessment decisions.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/risks"
              className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Risk Analysis
            </a>
            <a
              href="/financials"
              className="px-4 py-2 border border-primary-300 text-primary-700 text-sm font-medium rounded-lg hover:bg-primary-100 transition-colors"
            >
              Run Financial Scenarios
            </a>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-500 mb-3">Data Sources</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-500">
          <li>
            <a href="https://user.ncreif.org/data-products/farmland/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
              NCREIF Farmland Property Index
            </a>
          </li>
          <li>
            <a href="https://farmtogether.com/learn/blog/breaking-down-the-2024-ncreif-farmland-performance-key-insights-and-trends" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
              FarmTogether - 2024 NCREIF Analysis
            </a>
          </li>
          <li>
            <a href="https://acretrader.com/resources/farmland-values/farmland-returns" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
              AcreTrader - Farmland Returns
            </a>
          </li>
          <li>
            <a href="https://coststudyfiles.ucdavis.edu/2024/07/09/2024SacValleyAlmonds7.5.24.%20Final%20draft.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
              UC Davis - Almond Cost Studies 2024
            </a>
          </li>
          <li>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11085513/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
              Carob: A Mediterranean Resource for the Future (PMC)
            </a>
          </li>
          <li>
            <a href="https://www.efanews.eu/item/34670-private-equity-bets-on-spanish-and-portuguese-olive-oil.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
              EFA News - Olive Oil PE Investment
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
