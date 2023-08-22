import { Router } from 'express';

interface BaseRouter<T> {
  router: Router;
  controller: T;

  initializeRoutes(): void;
}

export default BaseRouter;
