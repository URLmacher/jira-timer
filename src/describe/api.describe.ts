import { AxiosResponse } from 'axios';

export enum EAxiosResponseType {
  ARRAY_BUFFER = 'arraybuffer',
  BLOB = 'blob',
  DOCUMENT = 'document',
  JSON = 'json',
  TEXT = 'text',
  STREAM = 'stream',
}

export enum EErrorMessage {
  FETCH_FAILED = 'Could not get data from server, please reload the page or contact an administrator!',
  LOGIN_FAILED = 'login failed',
  UNAUTHORIZED = 'unauthorized',
  VALIDATION_FAILED = 'validation failed',
}

export interface ApiRequestParams {
  [index: string]: boolean | string | number | undefined;
}

export type ApiRequestData = ApiRequestParams;

export interface ApiRequestObject {
  axiosConfig?: {
    responseType: EAxiosResponseType;
  };
  data?: ApiRequestData;
  params?: ApiRequestParams;
  query?: ApiRequestParams;
}

export interface FetchError extends Error {
  response?: AxiosResponse;
}

export interface ErrorLog {
  err?: FetchError;
  message?: string;
}
