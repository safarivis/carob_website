"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { Chart, defaultColors } from "@/components/Chart";
import { proposal } from "@/data/proposal";

type ScenarioKey = "conservative" | "base" | "optimistic";

export default function FinancialsPage() {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioKey>("base");

  const scenario = proposal.financials.scenarios[selectedScenario];

  const projectionColumns = [
    { key: "year", header: "Year", align: "center" as const },
    {
      key: "capex",
      header: "CAPEX",
      align: "right" as const,
      render: (row: typeof proposal.financials.projections[0]) =>
        row.capex > 0 ? `$${(row.capex / 1000).toFixed(0)}K` : "-",
    },
    {
      key: "opex",
      header: "OPEX",
      align: "right" as const,
      render: (row: typeof proposal.financials.projections[0]) =>
        `$${(row.opex / 1000).toFixed(0)}K`,
    },
    {
      key: "revenue",
      header: "Revenue",
      align: "right" as const,
      render: (row: typeof proposal.financials.projections[0]) =>
        row.revenue > 0 ? `$${(row.revenue / 1000).toFixed(0)}K` : "-",
    },
    {
      key: "netCashFlow",
      header: "Net Cash Flow",
      align: "right" as const,
      render: (row: typeof proposal.financials.projections[0]) => (
        <span className={row.netCashFlow >= 0 ? "text-green-600" : "text-red-600"}>
          ${(row.netCashFlow / 1000).toFixed(0)}K
        </span>
      ),
    },
    {
      key: "cumulative",
      header: "Cumulative",
      align: "right" as const,
      render: (row: typeof proposal.financials.projections[0]) => (
        <span className={row.cumulative >= 0 ? "text-green-600 font-medium" : "text-red-600"}>
          ${(row.cumulative / 1000000).toFixed(2)}M
        </span>
      ),
    },
  ];

  const fundColumns = [
    { key: "category", header: "Category" },
    {
      key: "amount",
      header: "Amount",
      align: "right" as const,
      render: (row: typeof proposal.financials.useOfFunds[0]) =>
        `$${(row.amount / 1000).toFixed(0)}K`,
    },
    {
      key: "percent",
      header: "%",
      align: "right" as const,
      render: (row: typeof proposal.financials.useOfFunds[0]) => `${row.percent}%`,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        badge="Financial Model"
        title="Investment & Returns"
        subtitle="Detailed financial projections for a 250 ha medium-scale operation"
      />

      {/* Scenario Selector */}
      <section className="mb-8">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit">
          {(["conservative", "base", "optimistic"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSelectedScenario(s)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                selectedScenario === s
                  ? "bg-white text-primary-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Key Metrics for Selected Scenario */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Annual Revenue"
            value={`$${(scenario.revenue / 1000).toFixed(0)}`}
            unit="K"
            description="At maturity"
          />
          <MetricCard
            label="Annual EBITDA"
            value={`$${(scenario.ebitda / 1000).toFixed(0)}`}
            unit="K"
            description="At maturity"
          />
          <MetricCard
            label="IRR (20-year)"
            value={scenario.irr}
            unit="%"
            description={scenario.name + " scenario"}
          />
          <MetricCard
            label="Payback Period"
            value={scenario.payback}
            unit=" years"
            description={`Break-even Year ${scenario.breakeven}`}
          />
        </div>
      </section>

      {/* Scenario Comparison */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Scenario Comparison</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="grid grid-cols-3 gap-4">
            {(["conservative", "base", "optimistic"] as const).map((s) => {
              const sc = proposal.financials.scenarios[s];
              const isSelected = selectedScenario === s;
              return (
                <div
                  key={s}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? "border-primary-300 bg-primary-50 ring-2 ring-primary-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedScenario(s)}
                >
                  <h4 className={`font-semibold mb-1 ${isSelected ? "text-primary-800" : "text-gray-900"}`}>
                    {sc.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">{sc.description}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Revenue</span>
                      <span className="font-medium tabular-nums">${(sc.revenue / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">IRR</span>
                      <span className="font-medium tabular-nums">{sc.irr}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Payback</span>
                      <span className="font-medium tabular-nums">{sc.payback} yrs</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cash Flow Chart */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">15-Year Cash Flow Projection</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <Chart
            data={proposal.financials.projections}
            type="area"
            xKey="year"
            yKeys={[
              { key: "revenue", color: defaultColors.primary, name: "Revenue" },
              { key: "cumulative", color: defaultColors.secondary, name: "Cumulative" },
            ]}
            formatY={(v) => `$${(v / 1000000).toFixed(1)}M`}
            formatX={(v) => `Y${v}`}
            height={350}
          />
        </div>
      </section>

      {/* Detailed Projections Table */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Year-by-Year Projections (Base Scenario)</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6 overflow-x-auto">
          <DataTable data={proposal.financials.projections} columns={projectionColumns} />
        </div>
      </section>

      {/* Use of Funds */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Use of Funds</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Investment Breakdown ($1.4M)</h4>
            <DataTable data={proposal.financials.useOfFunds} columns={fundColumns} />
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Investment Phases</h4>
            <div className="space-y-4">
              <div className="p-4 bg-primary-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary-800">Phase 1: Establishment</span>
                  <span className="font-bold text-primary-900">$1.15M</span>
                </div>
                <p className="text-sm text-primary-600">Years 1-5: Land, infrastructure, trees, working capital</p>
              </div>
              <div className="p-4 bg-secondary-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-secondary-800">Phase 2: Processing</span>
                  <span className="font-bold text-secondary-900">$250K</span>
                </div>
                <p className="text-sm text-secondary-600">Year 8: Kibbling equipment and facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Scales */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Scale Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(["pilot", "medium", "large"] as const).map((scale) => {
            const s = proposal.financials.scales[scale];
            const isRecommended = scale === "medium";
            return (
              <div
                key={scale}
                className={`bg-white rounded-xl border p-6 ${
                  isRecommended ? "border-primary-200 ring-2 ring-primary-100" : "border-gray-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 capitalize">{scale}</h4>
                  {isRecommended && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Hectares</span>
                    <span className="font-medium">{s.hectares} ha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Trees</span>
                    <span className="font-medium">{s.trees.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Investment</span>
                    <span className="font-medium">
                      ${(s.investment.min / 1000).toFixed(0)}K - ${(s.investment.max / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Revenue (mature)</span>
                    <span className="font-medium">
                      ${(s.revenueAtMaturity.min / 1000).toFixed(0)}K - ${(s.revenueAtMaturity.max / 1000000).toFixed(0)}M
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payback</span>
                    <span className="font-medium">{s.payback}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
