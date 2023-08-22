import { Router } from 'express';
import UserRoutes from './modules/users/routes/users.routes';
const router = Router();

// Users
const userRoutes = new UserRoutes();
router.use('/users', userRoutes.router);
router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

export default router;
