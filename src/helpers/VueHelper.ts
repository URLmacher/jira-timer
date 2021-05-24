import { RouteLocationNormalized } from 'vue-router';

class VueHelper {
  public getIdFromRoute(route: RouteLocationNormalized): number | null {
    let id = null;
    if (typeof route.params.id === 'string') {
      id = parseInt(route.params.id, 10);
    }

    return id;
  }
}

export default new VueHelper();
