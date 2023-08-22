import CRUDController, { ResourceIdRequest } from '@/core/commons/crud.interface';
import { Request, Response } from 'express';
import { User } from '../models/user.model';

type UserDTO = Partial<User>;

class UserController implements CRUDController<User, UserDTO> {
  public post(req: Request, res: Response): void {
    res.status(200).status(200).send('Post user');
  }
  public find(req: Request, res: Response): void {
    res.status(200).send('Find users');
  }
  public get(req: Request<ResourceIdRequest>, res: Response): void {
    res.status(200).send('Find user by id');
  }
  public put(req: Request<ResourceIdRequest>, res: Response): void {
    res.status(200).send('Update user by id');
  }
  public delete(req: Request<ResourceIdRequest>, res: Response): void {
    res.status(200).send('Delete user by id');
  }
}

export default UserController;
