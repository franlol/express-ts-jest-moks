import { Router } from 'express';
import { ECommentRoutes } from './comment.types';
import { getComments } from "./comment.controller";

const commentRoutes: Router = Router();

// commentRoutes.use(ECommentRoutes.COMMENT_INDEX, );
commentRoutes.use(ECommentRoutes.COMMENT_ALL, getComments);

export default commentRoutes;
