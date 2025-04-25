export const request = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  const requestInit: RequestInit = {
    ...options,
    headers: {
      ...options.headers,
      acccept: "application/json",
    },
  };

  const request = new Request(url, requestInit);
  const response = await fetch(request);
  const data = await response.json();

  return data as T;
};
