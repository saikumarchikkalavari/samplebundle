import axios, { AxiosRequestConfig } from 'axios';

export type FetchJsonOptions = AxiosRequestConfig & {
  timeout?: number; // ms
  parseJson?: boolean;
};

export async function fetchJson<T = any>(input: string, init?: FetchJsonOptions): Promise<T> {
  const timeout = init?.timeout ?? 0;
  const parseJson = init?.parseJson ?? true;

  try {
    const response = await axios({
      url: input,
      ...init,
      timeout,
    });

    if (!parseJson) {
      // caller wants raw response
      // @ts-ignore
      return response as unknown as T;
    }

    return response.data as T;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err: any = new Error(`HTTP Error ${error.response?.status || 'Unknown'}`);
      err.status = error.response?.status;
      err.body = error.response?.data;
      throw err;
    }
    throw error;
  }
}

export default fetchJson;