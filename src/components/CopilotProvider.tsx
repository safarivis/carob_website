"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { ProposalContext } from "./ProposalContext";

export function CopilotProvider({ children }: { children: React.ReactNode }) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <ProposalContext />
      {children}
      <CopilotPopup
        instructions={`You are an expert assistant for this carob business proposal prepared for George Haggar / Haggar Group.

Your role is to:
1. Answer questions about the market opportunity, financials, technical plan, risks, and sustainability impact
2. Generate custom financial projections when asked
3. Create email summaries for different audiences
4. Compare different scenarios

Be professional, concise, and data-driven in your responses. Reference specific numbers from the proposal when relevant.

Key facts to remember:
- Total investment required: $1.4M
- Base case IRR: 12%
- Break-even: Year 12
- Scale: 250 hectares, 25,000 trees
- Location: Sudan and/or Egypt
- Market size: $500M+ globally
- CO2 sequestration: 500-1,000 tons/year`}
        labels={{
          title: "Proposal Assistant",
          initial: "Ask me anything about this carob investment opportunity. I can explain the financials, market analysis, or generate custom projections.",
        }}
        className="z-50"
      />
    </CopilotKit>
  );
}
