import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  fetchData: (url: string, options?: AxiosRequestConfig) => Promise<T | null>;
  createData: (url: string, data: any, options?: AxiosRequestConfig) => Promise<T | null>;
  updateData: (url: string, data: any, options?: AxiosRequestConfig) => Promise<T | null>;
  deleteData: (url: string, options?: AxiosRequestConfig) => Promise<T | null>;
}

const useApi = <T>(): UseApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const handleRequest = useCallback(async (
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<T> = await axios({
        method,
        url,
        data,
        ...options,
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err as AxiosError);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchData = useCallback((url: string, options?: AxiosRequestConfig): Promise<T | null> => {
    return handleRequest('get', url, undefined, options);
  }, [handleRequest]);

  const createData = useCallback((url: string, data: any, options?: AxiosRequestConfig): Promise<T | null> => {
    return handleRequest('post', url, data, options);
  }, [handleRequest]);

  const updateData = useCallback((url: string, data: any, options?: AxiosRequestConfig): Promise<T | null> => {
    return handleRequest('put', url, data, options);
  }, [handleRequest]);

  const deleteData = useCallback((url: string, options?: AxiosRequestConfig): Promise<T | null> => {
    return handleRequest('delete', url, undefined, options);
  }, [handleRequest]);

  return { data, loading, error, fetchData, createData, updateData, deleteData };
};

export default useApi;