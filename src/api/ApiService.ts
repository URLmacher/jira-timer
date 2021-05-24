import axios, { AxiosStatic } from 'axios';
import ApiRoutes from '@/api/ApiRoutes';
import { ApiRequestObject } from '@/describe/api.describe';
import ApiHelper from '@/api/api-helper';
import { ILog, ITask } from '@/describe/data.describe';
import config from '@/config/config';

class ApiService {
  readonly axios: AxiosStatic;

  constructor(axios: AxiosStatic) {
    this.axios = axios;
  }

  private async fetch<T>(apiRoute: ApiRoutes, object: ApiRequestObject): Promise<T> {
    let data!: T;
    try {
      const config = ApiHelper.getRequestConfig(apiRoute, object);
      ({ data } = await this.axios.request<T>(config));
    } catch (err) {
      await ApiHelper.handleFetchError(err, apiRoute);
    }
    return data;
  }

  public async getLogs(): Promise<ILog[]> {
    return this.fetch<ILog[]>(ApiRoutes.getLogs, {});
  }

  public async getTasks(): Promise<ITask[]> {
    return this.fetch<ITask[]>(ApiRoutes.getTasks, {});
  }

  public async getTask(id: number): Promise<ITask> {
    return this.fetch<ITask>(ApiRoutes.getTask, { params: { id } });
  }
}

axios.defaults.baseURL = config.api.baseUrl;
export default new ApiService(axios);
