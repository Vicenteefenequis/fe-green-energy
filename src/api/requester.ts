import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const request = (config?: AxiosRequestConfig, contentType?: string) => {
  const service = axios.create({
    baseURL: 'http://localhost:8000',
    ...config,
  });

  service.interceptors.request.use(
    (req) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      req.headers = {
        'Content-Type': contentType || 'application/json',
        ...config?.headers,
      };

      return req;
    },
    (error) => Promise.reject(error)
  );

  return {
    async get<T>(uri: string): Promise<AxiosResponse<T>> {
      return await service.get<T>(uri);
    },
    async post<T>(uri: string, data: unknown): Promise<AxiosResponse<T>> {
      return await service.post<T>(uri, data);
    },
    async put<T>(uri: string, data: unknown): Promise<AxiosResponse<T>> {
      return await service.put<T>(uri, data);
    },
    async patch<T>(uri: string, data?: unknown): Promise<AxiosResponse<T>> {
      return await service.patch<T>(uri, data);
    },
    async delete<T>(uri: string): Promise<AxiosResponse<T>> {
      return await service.delete<T>(uri);
    },
  };
};
