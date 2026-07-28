import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function authFetch(
  url: string,
  router: AppRouterInstance,
  options: RequestInit = {}
) {
  const token = localStorage.getItem("token");

  const headers = {
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    localStorage.removeItem("token");
    router.replace("/login");
    throw new Error("Unauthorized");
  }

  return res;
}
