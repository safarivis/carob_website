"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { proposal } from "@/data/proposal";

export default function RisksPage() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200";
      case "High": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 15) return "bg-red-600";
    if (score >= 10) return "bg-orange-500";
    if (score >= 5) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        badge="Risk Analysis"
        title="Critical Evaluation"
        subtitle={proposal.riskAnalysis.summary}
      />

      {/* Critical Concerns */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Critical Concerns</h3>
        <div className="space-y-4">
          {proposal.riskAnalysis.criticalConcerns.map((concern) => (
            <div
              key={concern.title}
              className={`rounded-xl border p-6 ${getSeverityColor(concern.severity)}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg">{concern.title}</h4>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/50">
                  {concern.severity} Risk
                </span>
              </div>
              <p className="mb-4 opacity-90">{concern.description}</p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm font-medium mb-2">Questions to consider:</p>
                <ul className="space-y-1">
                  {concern.questions.map((q, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-current opacity-60">?</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Matrix */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Matrix</h3>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Risk</th>
                <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Likelihood</th>
                <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Impact</th>
                <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">Score</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Recommended Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {proposal.riskAnalysis.riskMatrix
                .sort((a, b) => b.score - a.score)
                .map((risk) => (
                <tr key={risk.risk} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{risk.risk}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-medium">
                      {risk.likelihood}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-medium">
                      {risk.impact}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold ${getScoreColor(risk.score)}`}>
                      {risk.score}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{risk.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500">
            Score = Likelihood (1-5) × Impact (1-5). Higher scores indicate greater risk priority.
          </div>
        </div>
      </section>

      {/* Stress Scenarios */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Stress Test Scenarios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {proposal.riskAnalysis.stressScenarios.map((scenario, i) => (
            <div
              key={scenario.name}
              className={`rounded-xl border p-5 ${
                i === 0 ? "border-green-200 bg-green-50" :
                i === 1 ? "border-yellow-200 bg-yellow-50" :
                i === 2 ? "border-orange-200 bg-orange-50" :
                "border-red-200 bg-red-50"
              }`}
            >
              <h4 className="font-semibold text-gray-900 mb-1">{scenario.name}</h4>
              <p className="text-xs text-gray-600 mb-4">{scenario.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Price</span>
                  <span className="font-medium">${scenario.pricePerKg}/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Yield</span>
                  <span className="font-medium">{scenario.yieldPercent}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">IRR</span>
                  <span className={`font-bold ${scenario.irr < 0 ? "text-red-600" : scenario.irr < 5 ? "text-orange-600" : "text-green-600"}`}>
                    {scenario.irr}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payback</span>
                  <span className="font-medium">{scenario.payback} yrs</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Break-Even Analysis */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Break-Even Thresholds</h3>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-4xl font-bold text-red-600">${proposal.riskAnalysis.breakEvenAnalysis.minimumPrice}</p>
              <p className="text-sm text-gray-600 mt-1">Minimum Price ($/kg)</p>
              <p className="text-xs text-gray-500 mt-2">Below this, investment doesn&apos;t recover in 20 years</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-4xl font-bold text-red-600">{proposal.riskAnalysis.breakEvenAnalysis.minimumYield}%</p>
              <p className="text-sm text-gray-600 mt-1">Minimum Yield</p>
              <p className="text-xs text-gray-500 mt-2">Below this, investment doesn&apos;t recover in 20 years</p>
            </div>
          </div>
          <p className="text-sm text-red-700 mt-4 text-center">{proposal.riskAnalysis.breakEvenAnalysis.note}</p>
        </div>
      </section>

      {/* Questions to Answer */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions to Answer Before Investing</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {proposal.riskAnalysis.questionsToAnswer.map((question, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-medium">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Alternative Considerations */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative Approaches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {proposal.riskAnalysis.alternativeConsiderations.map((alt) => (
            <div key={alt.option} className="bg-white rounded-xl border border-gray-100 p-5">
              <h4 className="font-semibold text-gray-900 mb-3">{alt.option}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">+</span>
                  <span className="text-gray-600">{alt.pros}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-medium">-</span>
                  <span className="text-gray-600">{alt.cons}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section>
        <div className="bg-gray-900 text-white rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Risk Assessment Summary</h3>
          <p className="text-gray-300 mb-6">
            This investment has potential but carries substantial risks. The long time horizon, regional instability,
            and price uncertainty require careful consideration. Before proceeding, ensure all critical questions
            are answered and consider whether a smaller pilot or alternative structure might reduce exposure while
            testing key assumptions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/financials"
              className="px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Run Financial Scenarios
            </a>
            <a
              href="/conclusion"
              className="px-5 py-2.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Summary
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
