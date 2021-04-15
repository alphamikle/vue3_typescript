import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Utils {
  static createAxiosInstance(config?: AxiosRequestConfig): AxiosInstance {
    return axios.create(config);
  }
}
