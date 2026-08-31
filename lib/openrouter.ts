export const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
export const DEFAULT_MODEL = "openai/gpt-4o";

export type OpenRouterModel = {
  id: string;
  name?: string;
  description?: string;
  context_length?: number;
  pricing?: { prompt?: string; completion?: string };
};

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

type ModelsResponse = { data?: OpenRouterModel[] };
type CompletionResponse = { choices?: { message?: { content?: string } }[]; error?: { message?: string } };

function requestHeaders(apiKey: string) {
  return {
    Authorization: `Bearer ${apiKey}`,
    "HTTP-Referer": "https://github.com/kholqin/m4zk1play-agent",
    "X-Title": "M4ZK1pLay Agent",
    "Content-Type": "application/json",
  };
}

async function readJson<T>(response: Response): Promise<T> {
  const payload = (await response.json()) as T & { error?: { message?: string } };
  if (!response.ok) throw new Error(payload.error?.message || `OpenRouter HTTP ${response.status}`);
  return payload;
}

/** Fetches the complete model catalog exposed by OpenRouter for the user's key. */
export async function fetchModels(apiKey: string): Promise<OpenRouterModel[]> {
  const response = await fetch(`${OPENROUTER_BASE_URL}/models`, {
    method: "GET",
    headers: requestHeaders(apiKey),
  });
  const payload = await readJson<ModelsResponse>(response);
  return payload.data ?? [];
}

/** Sends a direct chat completion request; the API key is supplied at runtime from SecureStore. */
export async function completeChat(apiKey: string, model: string, messages: ChatMessage[]) {
  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: requestHeaders(apiKey),
    body: JSON.stringify({ model: model || DEFAULT_MODEL, messages }),
  });
  const payload = await readJson<CompletionResponse>(response);
  return payload.choices?.[0]?.message?.content ?? "Model tidak mengembalikan teks.";
}
