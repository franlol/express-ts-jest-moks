import { Router } from "express";

import commentRouter from './comment';

const router: Router = Router();

// router.use('/user', userRoute);
router.use('/comment', commentRouter);

export default router;
