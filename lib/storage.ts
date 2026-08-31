import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_KEY = "m4zk1play.openrouter.api_key";
const PREFS_KEY = "m4zk1play.preferences";

type Preferences = {
  disclaimerAccepted?: boolean;
  selectedModel?: string;
  activeMode?: "cyber" | "bugbounty" | "developer";
  bugBountyScope?: { target: string; scope: string; outOfScope: string; restrictions: string };
};

const webSecureFallback = {
  async set(key: string, value: string) { if (typeof localStorage !== "undefined") localStorage.setItem(key, value); },
  async get(key: string) { return typeof localStorage !== "undefined" ? localStorage.getItem(key) : null; },
  async remove(key: string) { if (typeof localStorage !== "undefined") localStorage.removeItem(key); },
};

export const SecureKeyStorage = {
  async saveApiKey(value: string) {
    const normalized = value.trim();
    if (!normalized) throw new Error("API key tidak boleh kosong.");
    if (Platform.OS === "web") return webSecureFallback.set(API_KEY, normalized);
    return SecureStore.setItemAsync(API_KEY, normalized, { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY });
  },
  async getApiKey() {
    if (Platform.OS === "web") return webSecureFallback.get(API_KEY);
    return SecureStore.getItemAsync(API_KEY);
  },
  async deleteApiKey() {
    if (Platform.OS === "web") return webSecureFallback.remove(API_KEY);
    return SecureStore.deleteItemAsync(API_KEY);
  },
  async hasApiKey() { return Boolean(await this.getApiKey()); },
};

export async function loadPreferences(): Promise<Preferences> {
  const raw = await AsyncStorage.getItem(PREFS_KEY);
  if (!raw) return {};
  try { return JSON.parse(raw) as Preferences; } catch { return {}; }
}

export async function savePreferences(prefs: Preferences) {
  await AsyncStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
}

export type { Preferences };
