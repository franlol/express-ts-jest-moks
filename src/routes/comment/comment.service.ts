import fetch from 'node-fetch';
import { ECommentResponses, ECommentRoutes, TComment, TGetAllCommentsFunc } from './comment.types';

export const getAllComments: TGetAllCommentsFunc = async () => {
  try {
    const request = await fetch(ECommentRoutes.COMMENT_URL);
    const comments: Array<TComment> = await request.json();

    return comments;
  } catch (error) {
    throw new Error(ECommentResponses.COMMENT_ERROR_FETCH);
  }
}
