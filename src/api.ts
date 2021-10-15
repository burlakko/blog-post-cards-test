import { handleError } from './errorHandler';

export const api = {
  async get<t>(url: string, params: Record<string, any> = {}): Promise<t> {
    return fetch(url, { method: 'get', ...params })
      .then((response): Promise<t> => response.json() as Promise<t>)
      .catch(handleError);
  },
};
