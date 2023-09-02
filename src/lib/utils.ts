import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function checkCookieExists(cookieName: string) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, _] = cookie.split('=');
    if (name === cookieName) {
      return true;
    }
  }
  return false;
}

export function getCookie(name: string) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return undefined;
}
