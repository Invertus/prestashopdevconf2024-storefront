import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats prestashop image urls
 * @param url
 * @param type
 * @returns
 */
export function formatImage(url: string, type: 'medium_default' | 'home_default') {
  const urlParts = url.split('/');
  const fileName = urlParts.pop();

  if (!fileName) {
    return url;
  }

  const [name, extension] = fileName.split('.');
  const formattedFileName = `${name}-${type}.${extension}`;
  urlParts.push(formattedFileName);

  return urlParts.join('/');
}
