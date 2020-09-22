import { Router } from "express";

import commentRouter from './comment';
import { ROUTES } from "./routes.types";

const router: Router = Router();

// router.use('/post', postRouter)
// router.use('/user', userRouter);
router.use(ROUTES.COMMENT, commentRouter);

export default router;
