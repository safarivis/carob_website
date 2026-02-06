import { proposal } from "@/data/proposal";

const impactColors = {
  High: "bg-red-100 text-red-800 border-red-200",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Low: "bg-green-100 text-green-800 border-green-200",
};

const likelihoodColors = {
  Certain: "text-red-600",
  High: "text-red-500",
  "Medium-High": "text-orange-500",
  Medium: "text-yellow-600",
  Variable: "text-orange-500",
  Low: "text-green-600",
  "Low-Med": "text-yellow-500",
};

export function RiskMatrix() {
  return (
    <div className="space-y-4">
      {proposal.risks.map((risk, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{risk.name}</h4>
            <span
              className={`px-2 py-1 text-xs font-medium rounded border ${
                impactColors[risk.impact as keyof typeof impactColors] || impactColors.Medium
              }`}
            >
              {risk.impact} Impact
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">{risk.description}</p>
          <div className="flex items-center justify-between text-sm">
            <span
              className={`font-medium ${
                likelihoodColors[risk.likelihood as keyof typeof likelihoodColors] ||
                likelihoodColors.Medium
              }`}
            >
              Likelihood: {risk.likelihood}
            </span>
            <span className="text-primary-700 font-medium">
              Mitigation: {risk.mitigation}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
