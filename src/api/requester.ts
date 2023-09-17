import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const request = (config?: AxiosRequestConfig, contentType?: string) => {
  const service = axios.create({
    ...config,
    baseURL: "http://localhost:8080/api/v1/",
  });

  service.interceptors.request.use(
    (req) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      req.headers = {
        "Content-Type": contentType || "application/json",
        ...config?.headers,
      };
      return req;
    },
    (error) => Promise.reject(error)
  );

  service.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.response.status === 401) {
        window.location.href = "/entrar";
      }
      return Promise.reject(error);
    }
  );

  return {
    async get<T>(uri: string): Promise<AxiosResponse<T>> {
      return await service.get<T>(uri, { withCredentials: true });
    },
    async post<T>(uri: string, data: unknown): Promise<AxiosResponse<T>> {
      return await service.post<T>(uri, data, { withCredentials: true });
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
