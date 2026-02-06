import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";

// Supports: Moonshot/Kimi, xAI/Grok, or any OpenAI-compatible API
// Switch by changing OPENAI_BASE_URL and AI_MODEL in .env
const openaiAdapter = new OpenAIAdapter({
  model: process.env.AI_MODEL || "moonshot-v1-8k",
});

const runtime = new CopilotRuntime();

export const POST = async (req: Request) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: openaiAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
