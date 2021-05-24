import ApiRoutes from '@/api/ApiRoutes';
import {
  ApiRequestObject, ApiRequestParams, FetchError, EAxiosResponseType, EErrorMessage
} from '@/describe/api.describe';
import { AxiosRequestConfig } from 'axios';

export default class ApiHelper {
  public static getRequestConfig(route: ApiRoutes, object: ApiRequestObject): AxiosRequestConfig {
    const { method } = route;
    return {
      data: method !== 'GET' ? object.data : {},
      method,
      params: method === 'GET' ? object.query || object.data : object.query,
      responseType: object.axiosConfig?.responseType || EAxiosResponseType.JSON,
      url: object.params ? ApiHelper.transformParamsForURL(route.url, object.params) : route.url
    };
  }

  public static async handleFetchError(err: FetchError, apiRoute: ApiRoutes): Promise<void> {
    if (!err.response) {
      console.error(EErrorMessage.FETCH_FAILED);
      return;
    }

    if (err.response.status === 404) {
      console.error(err.response.data.debug || 'Event not found!');
      return;
    }

    const errorResponse = err.response?.data?.debug ?? err.response?.data?.message;
    console.error(errorResponse);
  }

  private static transformParamsForURL(url: string, params: ApiRequestParams): string {
    let ret = url;

    // eslint-disable-next-line no-restricted-syntax
    for (const param of Object.keys(params)) {
      const value = params[param]?.toString();
      if (!ret.includes(`:${param}`)) {
        console.error(`Parameter ":${param}" is NOT part of route "${url}"`);
      }
      ret = ret.replace(RegExp(`:${param}\\b`), value || '');
    }

    return ret;
  }

  public static getKnownFetchErrorMessage(err: FetchError): EErrorMessage | null {
    switch (err.response?.status) {
      case 400:
        return EErrorMessage.VALIDATION_FAILED;
      case 401:
        return EErrorMessage.UNAUTHORIZED;
      case 502:
        return EErrorMessage.LOGIN_FAILED;
      default:
        return null;
    }
  }
}
