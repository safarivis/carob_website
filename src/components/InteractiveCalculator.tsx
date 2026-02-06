"use client";

import { useMemo } from "react";
import { proposal } from "@/data/proposal";

interface Props {
  pricePerKg: number;
  setPricePerKg: (v: number) => void;
  yieldMultiplier: number;
  setYieldMultiplier: (v: number) => void;
}

export function InteractiveCalculator({ pricePerKg, setPricePerKg, yieldMultiplier, setYieldMultiplier }: Props) {
  const calculations = useMemo(() => {
    const baseRevenue = proposal.financials.scenarios.base.revenue; // $720,000 for 200 ha
    const baseEbitda = proposal.financials.scenarios.base.ebitda;   // $540,000 for 200 ha
    const investment = proposal.summary.ask.amount;                  // $3,000,000 for 200 ha

    // Price effect: base assumes $2.50/kg, adjust proportionally
    const priceMultiplier = pricePerKg / 2.5;
    const yieldMult = yieldMultiplier / 100;

    const adjustedRevenue = Math.round(baseRevenue * priceMultiplier * yieldMult);
    const adjustedEbitda = Math.round(adjustedRevenue * 0.75); // ~75% margin maintained

    // IRR approximation (simplified)
    const annualReturn = adjustedEbitda / investment;
    const estimatedIRR = Math.min(35, Math.max(0, Math.round(annualReturn * 100 - 2)));

    // Payback approximation - accounts for 8+ years before any revenue plus time to recover investment
    const paybackYears = adjustedEbitda > 0
      ? Math.max(14, Math.round(investment / adjustedEbitda) + 10)
      : 30;

    // 25-year value
    const productiveYears = 25 - paybackYears + 1;
    const twentyFiveYearValue = adjustedEbitda * Math.max(0, productiveYears);

    return {
      revenue: adjustedRevenue,
      ebitda: adjustedEbitda,
      irr: estimatedIRR,
      payback: paybackYears,
      twentyYearValue: twentyFiveYearValue,
      margin: pricePerKg >= 10 ? "retail" : pricePerKg >= 5 ? "premium" : "wholesale",
    };
  }, [pricePerKg, yieldMultiplier]);

  const getMarginLabel = () => {
    if (pricePerKg >= 15) return { label: "Retail Direct", color: "bg-green-100 text-green-800" };
    if (pricePerKg >= 8) return { label: "Premium Wholesale", color: "bg-blue-100 text-blue-800" };
    if (pricePerKg >= 4) return { label: "Quality Wholesale", color: "bg-yellow-100 text-yellow-800" };
    return { label: "Bulk Wholesale", color: "bg-gray-100 text-gray-800" };
  };

  const marginInfo = getMarginLabel();

  const presets = [
    { name: "Base Case", price: 2.5, yield: 100 },
    { name: "Conservative", price: 1.8, yield: 80 },
    { name: "Stress Test", price: 1.5, yield: 70 },
    { name: "Optimistic", price: 5.0, yield: 120 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Interactive Projection Calculator</h3>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${marginInfo.color}`}>
          {marginInfo.label}
        </span>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => {
              setPricePerKg(preset.price);
              setYieldMultiplier(preset.yield);
            }}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              pricePerKg === preset.price && yieldMultiplier === preset.yield
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Price Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Selling Price ($/kg)</label>
            <span className="text-sm font-bold text-primary-700">${pricePerKg.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="1"
            max="25"
            step="0.5"
            value={pricePerKg}
            onChange={(e) => setPricePerKg(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$1 (bulk)</span>
            <span>$25 (retail)</span>
          </div>
        </div>

        {/* Yield Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Yield Performance</label>
            <span className="text-sm font-bold text-primary-700">{yieldMultiplier}%</span>
          </div>
          <input
            type="range"
            min="50"
            max="150"
            step="5"
            value={yieldMultiplier}
            onChange={(e) => setYieldMultiplier(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>50% (conservative)</span>
            <span>150% (optimistic)</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">${(calculations.revenue / 1000).toFixed(0)}K</p>
          <p className="text-xs text-gray-500">Annual Revenue</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">${(calculations.ebitda / 1000).toFixed(0)}K</p>
          <p className="text-xs text-gray-500">EBITDA</p>
        </div>
        <div className="bg-primary-50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-primary-700">{calculations.irr}%</p>
          <p className="text-xs text-primary-600">Est. IRR</p>
        </div>
        <div className="bg-primary-50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-primary-700">Yr {calculations.payback}</p>
          <p className="text-xs text-primary-600">Payback</p>
        </div>
      </div>

      {/* 20-Year Projection */}
      <div className="mt-6 p-4 bg-secondary-50 rounded-lg border border-secondary-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-secondary-800">Estimated 20-Year Value</p>
            <p className="text-xs text-secondary-600">Based on current assumptions</p>
          </div>
          <p className="text-3xl font-bold text-secondary-700">
            ${(calculations.twentyYearValue / 1000000).toFixed(1)}M
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-xs text-amber-800 font-medium mb-1">⚠️ Estimation Disclaimer</p>
        <p className="text-xs text-amber-700">
          This calculator uses simplified heuristics, not full DCF/IRR analysis. Displayed IRR is an approximation
          and may differ from proper financial modeling. Conservative analysis suggests 12% IRR vs 18% target under base assumptions.
        </p>
      </div>

      {/* Note */}
      <p className="mt-3 text-xs text-gray-500 text-center">
        200 ha operation: Base case assumes $2.50/kg wholesale, 800 tons/year at maturity.
        Value-add processing and retail channels offer significant margin upside.
      </p>
    </div>
  );
}
