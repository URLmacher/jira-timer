import { Method } from 'axios';

export default class ApiRoutes {
  readonly url: string;

  readonly method: Method;

  static getTasks = new ApiRoutes('/tasks', 'GET');

  static getTask = new ApiRoutes('/tasks/:id', 'GET');

  static getLogs = new ApiRoutes('/logs', 'GET');

  private constructor(url: string, method: Method) {
    this.url = url;
    this.method = method;
  }
}
