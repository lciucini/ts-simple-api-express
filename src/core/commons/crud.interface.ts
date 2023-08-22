import { Response, Request } from 'express';

export interface ResourceIdRequest {
  id: string;
}

interface CRUDController<Entity, DTO> {
  post(req: Request<DTO>, res: Response): void;
  find(req: Request, res: Response): void;
  get(req: Request<ResourceIdRequest>, res: Response): void;
  put(req: Request<ResourceIdRequest>, res: Response): void;
  delete(req: Request<ResourceIdRequest>, res: Response): void;
}

export default CRUDController;
