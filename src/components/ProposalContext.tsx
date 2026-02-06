"use client";

import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { proposal } from "@/data/proposal";

export function ProposalContext() {
  // Provide full proposal as readable context
  useCopilotReadable({
    description: "Complete carob business proposal including market analysis, financials, technical plan, risks, and impact metrics",
    value: proposal,
  });

  // Action: Generate custom financial projection
  useCopilotAction({
    name: "generateProjection",
    description: "Generate a custom financial projection based on specified parameters",
    parameters: [
      {
        name: "scale",
        type: "string",
        description: "Scale of operation: pilot (50ha), medium (250ha), or large (1000ha)",
        required: true,
      },
      {
        name: "scenario",
        type: "string",
        description: "Scenario type: conservative, base, or optimistic",
        required: true,
      },
      {
        name: "years",
        type: "number",
        description: "Number of years to project (default 15)",
        required: false,
      },
    ],
    handler: async ({ scale, scenario, years = 15 }) => {
      const scaleMultipliers: Record<string, number> = {
        pilot: 0.2,
        medium: 1,
        large: 4,
      };
      const scenarioData = proposal.financials.scenarios[scenario as keyof typeof proposal.financials.scenarios];
      const multiplier = scaleMultipliers[scale] || 1;

      if (!scenarioData) {
        return { error: "Invalid scenario. Use: conservative, base, or optimistic" };
      }

      const projection = {
        scale,
        scenario,
        years,
        investment: Math.round(1400000 * multiplier),
        matureRevenue: Math.round(scenarioData.revenue * multiplier),
        matureEbitda: Math.round(scenarioData.ebitda * multiplier),
        irr: scenarioData.irr,
        payback: scenarioData.payback,
        breakeven: scenarioData.breakeven,
        totalReturn20yr: Math.round(scenarioData.ebitda * multiplier * (20 - scenarioData.breakeven)),
      };

      return projection;
    },
    render: ({ status, result }) => {
      if (status === "executing") {
        return <div className="text-sm text-gray-500">Generating projection...</div>;
      }
      if (!result) return <></>;
      if ("error" in result) {
        return <div className="text-sm text-red-500">{result.error}</div>;
      }
      return (
        <div className="bg-primary-50 p-4 rounded-lg text-sm">
          <h4 className="font-semibold text-primary-800 mb-2">Custom Projection: {result.scale} scale, {result.scenario}</h4>
          <ul className="space-y-1 text-primary-700">
            <li>Investment: ${(result.investment / 1000000).toFixed(2)}M</li>
            <li>Mature Revenue: ${(result.matureRevenue / 1000).toFixed(0)}K/yr</li>
            <li>Mature EBITDA: ${(result.matureEbitda / 1000).toFixed(0)}K/yr</li>
            <li>IRR: {result.irr}%</li>
            <li>Payback: Year {result.payback}</li>
            <li>Est. 20yr Return: ${(result.totalReturn20yr / 1000000).toFixed(2)}M</li>
          </ul>
        </div>
      );
    },
  });

  // Action: Generate email summary
  useCopilotAction({
    name: "generateEmailSummary",
    description: "Generate an email summary of the proposal for a specific audience",
    parameters: [
      {
        name: "recipientType",
        type: "string",
        description: "Type of recipient: investor, partner, or internal",
        required: true,
      },
      {
        name: "sections",
        type: "string",
        description: "Comma-separated list of sections to include: overview, market, financials, impact, risks, nextSteps",
        required: false,
      },
    ],
    handler: async ({ recipientType, sections = "overview,financials,nextSteps" }) => {
      const sectionList = sections.split(",").map((s) => s.trim());

      const templates: Record<string, { subject: string; intro: string }> = {
        investor: {
          subject: "Investment Opportunity: Carob Production in East Africa",
          intro: "I wanted to share an attractive agricultural investment opportunity with strong ESG credentials.",
        },
        partner: {
          subject: "Partnership Opportunity: Carob Production Venture",
          intro: "We are exploring opportunities for strategic partnerships in sustainable carob production.",
        },
        internal: {
          subject: "Carob Venture - Executive Summary",
          intro: "Please find below a summary of the carob business proposal for Haggar Group.",
        },
      };

      const template = templates[recipientType] || templates.internal;

      const sectionContent: Record<string, string> = {
        overview: `**The Opportunity:** ${proposal.summary.opportunity}`,
        market: `**Market:** $${proposal.market.size.value}M+ globally, growing ${proposal.market.cagr}% annually. Key driver: 65% decline in Mediterranean production creating supply gap.`,
        financials: `**Investment:** $${(proposal.summary.ask.amount / 1000000).toFixed(1)}M | **IRR:** ${proposal.financials.scenarios.base.irr}% (base case) | **Payback:** ${proposal.financials.scenarios.base.payback} years`,
        impact: `**Impact:** ${proposal.impact.environmental.co2Sequestered.min}-${proposal.impact.environmental.co2Sequestered.max} tons CO2/year sequestered, ${proposal.impact.social.directJobs.min}+ direct jobs created`,
        risks: `**Key Risks:** Long lead time (6-10 years), regional factors. Mitigated by patient capital structure and multi-site strategy.`,
        nextSteps: `**Next Steps:** Site assessment, nursery establishment, pilot planting (50 ha initial).`,
      };

      const body = sectionList
        .filter((s) => sectionContent[s])
        .map((s) => sectionContent[s])
        .join("\n\n");

      return {
        subject: template.subject,
        body: `${template.intro}\n\n${body}\n\nPrepared by LewkAi for Haggar Group.`,
      };
    },
    render: ({ status, result }) => {
      if (status === "executing") {
        return <div className="text-sm text-gray-500">Generating email...</div>;
      }
      if (!result) return <></>;
      return (
        <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Subject: {result.subject}</p>
          <pre className="whitespace-pre-wrap text-gray-700 text-xs">{result.body}</pre>
        </div>
      );
    },
  });

  // Action: Compare scenarios
  useCopilotAction({
    name: "compareScenarios",
    description: "Compare two financial scenarios side by side",
    parameters: [
      {
        name: "scenario1",
        type: "string",
        description: "First scenario: conservative, base, or optimistic",
        required: true,
      },
      {
        name: "scenario2",
        type: "string",
        description: "Second scenario: conservative, base, or optimistic",
        required: true,
      },
    ],
    handler: async ({ scenario1, scenario2 }) => {
      const s1 = proposal.financials.scenarios[scenario1 as keyof typeof proposal.financials.scenarios];
      const s2 = proposal.financials.scenarios[scenario2 as keyof typeof proposal.financials.scenarios];

      if (!s1 || !s2) {
        return { error: "Invalid scenario. Use: conservative, base, or optimistic" };
      }

      return {
        scenario1: { ...s1 },
        scenario2: { ...s2 },
        differences: {
          revenue: s2.revenue - s1.revenue,
          ebitda: s2.ebitda - s1.ebitda,
          irr: s2.irr - s1.irr,
          payback: s2.payback - s1.payback,
        },
      };
    },
    render: ({ status, result }) => {
      if (status === "executing") {
        return <div className="text-sm text-gray-500">Comparing scenarios...</div>;
      }
      if (!result) return <></>;
      if ("error" in result) {
        return <div className="text-sm text-red-500">{result.error}</div>;
      }
      return (
        <div className="bg-secondary-50 p-4 rounded-lg text-sm">
          <h4 className="font-semibold text-secondary-800 mb-3">Scenario Comparison</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-secondary-700">{result.scenario1.name}</p>
              <ul className="text-secondary-600 text-xs mt-1">
                <li>Revenue: ${(result.scenario1.revenue / 1000).toFixed(0)}K</li>
                <li>IRR: {result.scenario1.irr}%</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-secondary-700">{result.scenario2.name}</p>
              <ul className="text-secondary-600 text-xs mt-1">
                <li>Revenue: ${(result.scenario2.revenue / 1000).toFixed(0)}K</li>
                <li>IRR: {result.scenario2.irr}%</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-secondary-600">
            Difference: +${(result.differences.revenue / 1000).toFixed(0)}K revenue, +{result.differences.irr}% IRR
          </p>
        </div>
      );
    },
  });

  return null;
}
