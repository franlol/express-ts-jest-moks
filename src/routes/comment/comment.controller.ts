import { Request, Response, NextFunction } from 'express';
import { getAllComments } from './comment.service';

export const getComments = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const comments = await getAllComments();

    return res
      .status(200)
      .json(comments);
  } catch (error) {
    next(error)
  }
}
