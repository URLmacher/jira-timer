<script lang="ts">
import { defineComponent } from 'vue';

export interface IServerResponse extends Response {
  error: boolean;
  statusCode: number;
  data?: Record<string, unknown>;
}

export interface IRequestInit {
  headers: Record<string, string>;
  method: string;
  body?: string;
}

export default defineComponent({
  name: 'ApiService',
  setup() {
    const handleResponseError = async (
      response: Response,
    ): Promise<unknown | null> => {
      if (!response.ok) {
        const msg = await response.json();
        return msg;
      }

      return null;
    };

    const requestPlain = async (
      method: string,
      url: string,
      data?: Record<string, unknown>,
    ): Promise<Response> => {
      const headers: Record<string, string> = {};

      const config: IRequestInit = {
        headers,
        method: method.toLocaleUpperCase(),
      };

      if (data) {
        config.body = JSON.stringify(data);
      }

      return fetch(url, config);
    };

    const request = async (
      method: string,
      url: string,
      data?: Record<string, unknown>,
    ): Promise<unknown> => {
      const response = await requestPlain(method, url, data);

      const errorJson = await handleResponseError(response);
      return errorJson || response.json();
    };

    const get = async (url: string): Promise<IServerResponse> => request('GET', url) as Promise<IServerResponse>;

    const post = async (
      url: string,
      data: Record<string, unknown>,
    ): Promise<IServerResponse> => request('POST', url, data) as Promise<IServerResponse>;

    const postPlain = async (
      url: string,
      data: Record<string, unknown>,
    ): Promise<Response> => {
      const response = await requestPlain('POST', url, data);
      const errorJson = await handleResponseError(response);
      if (errorJson) {
        throw new Error('no plain response available');
      }

      return response;
    };

    return {
      get,
      post,
      postPlain,
    };
  },
});
</script>
