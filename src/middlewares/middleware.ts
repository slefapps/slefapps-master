import { Router, RouterOptions } from "express";

export const middleware = (router:any, middleware:any) => {
  for (const f of middleware) {
      f(router);
  }
};
export const applyRoutes = (router:Router, routes:any) => {
  for (const route of routes) {
      const {method, path, handler} = route;
      switch (method) {
        case 'get':
          router.get(path, handler);
          break;
      
        case 'post':
          router.post(path, handler);
          break;
        
        case 'put':
          router.put(path, handler);

          break;

        case 'delete':
          router.delete(path, handler);
          break;
        
        case 'patch':
          router.patch(path, handler);
          break;

        case 'head':
          router.head(path, handler);
          break;
        
        case 'options':
          router.options(path, handler);
          break;
        
        case 'all':
          router.all(path, handler);
          break;
        case 'purge':
          router.purge(path, handler);
          break;
        case 'trace':
          router.trace(path, handler);
          break;
        case 'connect':
          router.connect(path, handler);
          break;
        case 'merge':
          router.merge(path, handler);
          break;

        default:
          break;
      }
  }
};
