import { SectionHeader } from "@/components/SectionHeader";
import { DataTable } from "@/components/DataTable";
import { proposal } from "@/data/proposal";

export default function TechnicalPage() {
  const yieldColumns = [
    { key: "age", header: "Tree Age" },
    { key: "yieldPerTree", header: "Yield/Tree" },
    { key: "notes", header: "Notes" },
  ];

  const systemColumns = [
    { key: "system", header: "System" },
    { key: "density", header: "Density" },
    { key: "spacing", header: "Spacing" },
    { key: "yield", header: "Yield/ha" },
    { key: "investment", header: "Investment" },
  ];

  const regionColumns = [
    { key: "name", header: "Region" },
    { key: "climate", header: "Climate" },
    { key: "water", header: "Water" },
    { key: "infrastructure", header: "Infrastructure" },
    { key: "risk", header: "Risk" },
    {
      key: "overall",
      header: "Suitability",
      render: (row: typeof proposal.technical.regions[0]) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${
            row.overall === "High"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.overall}
        </span>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        badge="Technical Plan"
        title="Cultivation & Operations"
        subtitle="Carob is a drought-tolerant, low-input crop with 100+ year lifespan and proven commercial viability."
      />

      {/* Crop Profile */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Crop Profile</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(proposal.technical.crop).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-gray-500 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="text-sm font-medium text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100-Year Asset Banner */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-500 text-white font-bold text-xl">
              100+
            </span>
            <div>
              <h3 className="text-2xl font-bold">The 100-Year Asset</h3>
              <p className="text-primary-200">A generational investment that appreciates over time</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-semibold mb-2">{proposal.technical.lifetimeValue.description}</h4>
              <p className="text-sm text-primary-200">{proposal.technical.lifetimeValue.peakProduction}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Generational Wealth</h4>
              <p className="text-sm text-primary-200">{proposal.technical.lifetimeValue.generationalAsset}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Comparison Table */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Lifetime Value Comparison</h3>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Crop</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Productive Life</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Cumulative Yield (100 yrs)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Replant Cost</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Water Needs</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Maintenance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {proposal.technical.cropComparison.map((crop, i) => (
                  <tr key={i} className={crop.crop === "Carob" ? "bg-primary-50" : ""}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`font-medium ${crop.crop === "Carob" ? "text-primary-700" : "text-gray-900"}`}>
                        {crop.crop}
                        {crop.crop === "Carob" && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-primary-200 text-primary-800 rounded">Best</span>
                        )}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{crop.productiveLife}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-medium">{crop.cumulativeYield100yr}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{crop.replantCost}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{crop.waterNeeds}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{crop.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500">
            * Almond and Apple require 3-4x replanting over 100 years. Cumulative yield accounts for establishment periods after each replant.
          </div>
        </div>
      </section>

      {/* Climate Requirements */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate & Soil Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Climate</h4>
            <div className="space-y-3">
              {Object.entries(proposal.technical.climate).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-sm text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-sm font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Soil</h4>
            <div className="space-y-3">
              {Object.entries(proposal.technical.soil).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-sm text-gray-500 capitalize">{key}</span>
                  <span className="text-sm font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Suitability */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Suitability</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <DataTable data={proposal.technical.regions} columns={regionColumns} />
          <p className="mt-4 text-sm text-primary-700 font-medium">
            Recommendation: Prioritize Egypt for initial operations, with Sudan as expansion option.
          </p>
        </div>
      </section>

      {/* Planting Systems */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Planting Systems</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <DataTable data={proposal.technical.plantingSystems} columns={systemColumns} />
          <p className="mt-4 text-sm text-primary-700 font-medium">
            Recommendation: Semi-intensive system (100 trees/ha) balances yield potential with manageable complexity.
          </p>
        </div>
      </section>

      {/* Yield Projections */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Yield by Tree Age</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <DataTable data={proposal.technical.yields} columns={yieldColumns} />
        </div>
      </section>

      {/* Processing Options */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Processing Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {proposal.technical.processing.map((p) => (
            <div
              key={p.level}
              className={`bg-white rounded-xl border p-6 ${
                p.level === 2 ? "border-primary-200 ring-2 ring-primary-100" : "border-gray-100"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                  {p.level}
                </span>
                <h4 className="font-semibold text-gray-900">{p.name}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">{p.output}</p>
              <div className="text-sm font-medium text-primary-700">Cost: {p.cost}</div>
              {p.level === 2 && (
                <span className="inline-block mt-3 px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded">
                  Recommended
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
