/**
 * Prefix a public/ path with Vite's base URL so the same build works both at the
 * site root and under GitHub Pages' /<repo>/ sub-path.
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
