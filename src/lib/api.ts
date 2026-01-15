const apiUrl = String(process.env.API_URL);

export const getApiUrl = () => apiUrl;

interface FetchOptions extends RequestInit {
  token?: string;
  cache?: "force-cache" | "no-store";
  next?: {
    revalidate?: false | 0 | number;
    tags?: string[];
  };
}

export const apiClient = async <T>(
  endpoint: string,
  fetchOptions: FetchOptions = {},
): Promise<T> => {
  const { token, ...options } = fetchOptions;

  const headers: Record<string, string> = {
    ...(fetchOptions.headers as Record<string, string>),
  };

  const hasToken = Boolean(token);
  if (hasToken) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const isNotBodyFormData = !(fetchOptions.body instanceof FormData);
  if (isNotBodyFormData) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${apiUrl}${endpoint}`, { ...options, headers });

  const isNotSuccessResponse = !response.ok;
  if (isNotSuccessResponse) {
    const error = await response.json().catch(() => ({
      error: `Erro ${response.status}`,
    }));
    throw new Error(error.error || "Erro na requisição");
  }

  return response.json();
};
