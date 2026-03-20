const defaultDashboardOrigin = "http://localhost:3442"

export function getDashboardOrigin() {
  return (import.meta.env.VITE_STACKFOX_DASHBOARD_URL as string | undefined)?.replace(/\/$/, "") ?? defaultDashboardOrigin
}

export function getDashboardUrl(path = "/dashboard") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${getDashboardOrigin()}${normalizedPath}`
}