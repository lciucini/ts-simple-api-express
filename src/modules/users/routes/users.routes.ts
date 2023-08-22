import BaseRouter from '@/core/commons/router.interface';
import { Router } from 'express';
import UserController from '../controllers/users.controller';

class UserRoutes implements BaseRouter<UserController> {
  public router: Router = Router();
  public controller = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    // Find resources
    this.router.get('/', this.controller.find);
    // Get by id one resource
    this.router.get('/:id', this.controller.get);
    // Create a new resource
    this.router.post('/', this.controller.post);
    // Delate one resource
    this.router.delete('/:id', this.controller.delete);
    // Edit or create one resource
    this.router.put('/id:', this.controller.put);
  }
}

export default UserRoutes;
