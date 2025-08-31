export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

export async function loginRequest(login: string, password: string): Promise<boolean> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
    credentials: 'include',
  });
  try {
    const data = await res.json();
    return Boolean(data?.ok);
  } catch {
    return false;
  }
}

export async function fetchPages(auth: boolean): Promise<string[]> {
  const res = await fetch(`${API_URL}/pages?auth=${auth ? '1' : '0'}`, { credentials: 'include' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.pages ?? [];
}


