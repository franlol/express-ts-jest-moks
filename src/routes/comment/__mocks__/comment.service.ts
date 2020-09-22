import { TComment, TGetAllCommentsFunc } from '../comment.types';
import allComments from './allComments.json'

export const getAllComments: TGetAllCommentsFunc = () => Promise.resolve(allComments as Array<TComment>);
