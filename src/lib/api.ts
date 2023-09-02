import axios from 'axios';
import { checkCookieExists } from './utils';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

api.defaults.xsrfCookieName = 'csrftoken';
api.defaults.xsrfHeaderName = 'X-CSRFToken';

export async function setCSRFToken() {
  if (checkCookieExists('csrftoken')) {
    return;
  }
  const res = await api.get('/csrf/');
  const csrfToken = (
    (await res.data) as {
      csrfToken: string;
    }
  ).csrfToken;
  document.cookie = `csrftoken=${csrfToken}; expires=Thu, 29 Aug 2024 16:53:23 GMT; Max-Age=31449600; Path=/; SameSite=Lax;`;
  api.defaults.headers.post['X-CSRFToken'] = csrfToken;
}

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    await api.postForm('/api-auth/login/', {
      username,
      password,
    });

    const res = await api.get<{ valid: boolean; sessionId: string }>(
      '/api-auth/session/check/'
    );

    if (res.status === 200) {
      if ('sessionId' in res.data) {
        return {
          sessionId: res.data.sessionId,
        };
      }
    }
    return {
      sessionId: null,
    };
  } catch (e) {
    return {
      sessionId: null,
    };
  }
}

export async function register({
  name,
  username,
  email,
  password,
}: {
  name: string;
  username: string;
  email: string;
  password: string;
}) {
  const res = await api.post('/api-auth/register/', {
    username,
    email,
    password,
    first_name: name,
  });

  return res;
}
