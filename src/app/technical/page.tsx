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
        subtitle="200 ha commercial operation: 20,000 trees, semi-intensive planting, integrated processing in Egypt."
      />

      {/* About the Carob Tree */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">🌳</span>
            <div>
              <h3 className="text-2xl font-bold">The Carob Tree</h3>
              <p className="text-green-200 italic">{proposal.technical.crop.name}</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-5 mb-6">
            <p className="text-green-50 leading-relaxed">
              {proposal.technical.aboutTheTree.history}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {proposal.technical.aboutTheTree.commonNames.map((name, i) => (
              <span key={i} className="px-3 py-2 bg-white/10 rounded-lg text-sm text-center">
                {name}
              </span>
            ))}
          </div>

          <p className="text-green-100">
            {proposal.technical.aboutTheTree.description}
          </p>
        </div>
      </section>

      {/* Botanical Features */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Botanical Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proposal.technical.aboutTheTree.botanicalFeatures.map((item) => (
            <div key={item.feature} className="bg-white rounded-xl border border-gray-100 p-5">
              <h4 className="font-semibold text-primary-700 mb-2">{item.feature}</h4>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pollination - Critical for 20 ha Prototype */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Pollination Requirements</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-amber-600 text-xl">⚠️</span>
            <div>
              <p className="font-semibold text-amber-800 mb-1">Critical for Orchard Planning</p>
              <p className="text-sm text-amber-700">{proposal.technical.aboutTheTree.pollination.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white/60 rounded-lg p-4">
              <p className="text-sm font-medium text-amber-800">Male Tree Ratio</p>
              <p className="text-lg font-bold text-amber-900">{proposal.technical.aboutTheTree.pollination.maleRatio}</p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <p className="text-sm font-medium text-amber-800">Effective Producing Trees (200 ha / 20,000 trees)</p>
              <p className="text-lg font-bold text-amber-900">~14,000-16,000 female trees</p>
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-4">
            <p className="text-sm font-medium text-amber-800 mb-2">Management Considerations:</p>
            <ul className="space-y-1">
              {proposal.technical.aboutTheTree.pollination.management.map((item, i) => (
                <li key={i} className="text-sm text-amber-700 flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Unique Properties */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">What Makes Carob Unique</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proposal.technical.aboutTheTree.uniqueProperties.map((item) => (
            <div key={item.property} className="bg-primary-50 rounded-xl border border-primary-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-sm">✓</span>
                <h4 className="font-semibold text-primary-800">{item.property}</h4>
              </div>
              <p className="text-sm text-primary-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pod Composition */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s in a Carob Pod?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">Pulp</h4>
              <span className="text-2xl font-bold text-primary-600">{proposal.technical.aboutTheTree.podComposition.pulp.percent}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
              <div className="bg-primary-500 h-3 rounded-full" style={{ width: '90%' }} />
            </div>
            <ul className="space-y-2">
              {proposal.technical.aboutTheTree.podComposition.pulp.components.map((c, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">Seeds</h4>
              <span className="text-2xl font-bold text-secondary-600">{proposal.technical.aboutTheTree.podComposition.seeds.percent}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
              <div className="bg-secondary-500 h-3 rounded-full" style={{ width: '10%' }} />
            </div>
            <ul className="space-y-2">
              {proposal.technical.aboutTheTree.podComposition.seeds.components.map((c, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Uses of Carob */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Uses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🍫</span> Food Products
            </h4>
            <div className="space-y-3">
              {proposal.technical.aboutTheTree.uses.food.map((item) => (
                <div key={item.product} className="border-b border-gray-100 pb-2 last:border-0">
                  <span className="font-medium text-gray-800">{item.product}</span>
                  <p className="text-sm text-gray-500">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🏭</span> Industrial Applications
            </h4>
            <div className="space-y-3">
              {proposal.technical.aboutTheTree.uses.industrial.map((item) => (
                <div key={item.product} className="border-b border-gray-100 pb-2 last:border-0">
                  <span className="font-medium text-gray-800">{item.product}</span>
                  <p className="text-sm text-gray-500">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">💊</span> Health & Nutrition
            </h4>
            <div className="space-y-3">
              {proposal.technical.aboutTheTree.uses.health.map((item) => (
                <div key={item.product} className="border-b border-gray-100 pb-2 last:border-0">
                  <span className="font-medium text-gray-800">{item.product}</span>
                  <p className="text-sm text-gray-500">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🔧</span> Other Uses
            </h4>
            <div className="space-y-3">
              {proposal.technical.aboutTheTree.uses.other.map((item) => (
                <div key={item.product} className="border-b border-gray-100 pb-2 last:border-0">
                  <span className="font-medium text-gray-800">{item.product}</span>
                  <p className="text-sm text-gray-500">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carob vs Cocoa */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Carob vs Cocoa: Nutritional Comparison</h3>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Nutrient</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-primary-600 uppercase">Carob</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase">Cocoa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {proposal.technical.aboutTheTree.nutritionalComparison.map((row) => (
                <tr key={row.nutrient}>
                  <td className="px-4 py-3 text-sm text-gray-700">{row.nutrient}</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-primary-700">{row.carob}</td>
                  <td className="px-4 py-3 text-sm text-right text-gray-600">{row.cocoa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Did You Know?</h3>
        <div className="bg-secondary-50 rounded-xl border border-secondary-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proposal.technical.aboutTheTree.funFacts.map((fact, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-secondary-200 text-secondary-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-sm text-secondary-800">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crop Profile */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Crop Profile Summary</h3>
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
            200 ha Operation: Semi-intensive system (100 trees/ha) = 20,000 trees. This balances yield potential with manageable complexity and allows for integrated processing.
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
