import axios from "axios";

export const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export type OpenRouterModel = { id: string; name?: string; description?: string; context_length?: number; pricing?: { prompt?: string; completion?: string } };

function headers(apiKey: string) {
  return { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "HTTP-Referer": "https://github.com/m4zk1play/m4zk1play-agent", "X-Title": "M4ZK1pLay Agent" };
}

export async function fetchModels(apiKey: string): Promise<OpenRouterModel[]> {
  const response = await axios.get<{ data: OpenRouterModel[] }>(`${OPENROUTER_BASE_URL}/models`, { headers: headers(apiKey), timeout: 20000 });
  return response.data.data ?? [];
}

export async function completeChat(apiKey: string, model: string, messages: { role: "system" | "user" | "assistant"; content: string }[]) {
  const response = await axios.post<{ choices?: { message?: { content?: string } }[] }>(`${OPENROUTER_BASE_URL}/chat/completions`, { model, messages, temperature: 0.2 }, { headers: headers(apiKey), timeout: 60000 });
  return response.data.choices?.[0]?.message?.content ?? "Model tidak mengembalikan teks.";
}
