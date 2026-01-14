export type FetchJsonOptions = RequestInit & {
  timeout?: number; // ms
  parseJson?: boolean;
};

export async function fetchJson<T = any>(input: RequestInfo, init?: FetchJsonOptions): Promise<T> {
  const timeout = init?.timeout ?? 0;
  const parseJson = init?.parseJson ?? true;

  const controller = new AbortController();
  const signal = controller.signal;
  const timer = timeout > 0 ? setTimeout(() => controller.abort(), timeout) : null;

  try {
    const response = await fetch(input, { ...(init || {}), signal });

    if (!response.ok) {
      // try parse body for error details
      let body: any = null;
      try {
        body = await response.json();
      } catch (e) {
        try {
          body = await response.text();
        } catch (e2) {
          body = null;
        }
      }
      const err: any = new Error(`HTTP Error ${response.status}`);
      err.status = response.status;
      err.body = body;
      throw err;
    }

    if (!parseJson) {
      // caller wants raw response
      // @ts-ignore
      return response as unknown as T;
    }

    try {
      return (await response.json()) as T;
    } catch (e) {
      // not JSON, return text
      const text = await response.text();
      // @ts-ignore
      return text as T;
    }
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export default fetchJson;