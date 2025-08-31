export function saveAuthToken(token: string) {
  localStorage.setItem('auth_token', token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem('auth_token');
}

export function clearAuthToken() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('auth_login');
}

export function isAuthenticated(): boolean {
  return Boolean(getAuthToken());
}

export function saveLoginName(login: string) {
  localStorage.setItem('auth_login', login);
}

export function getLoginName(): string | null {
  return localStorage.getItem('auth_login');
}


