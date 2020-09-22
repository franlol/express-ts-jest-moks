export enum ECommentRoutes {
  COMMENT_INDEX = '/',
  COMMENT_ALL = '/all',
  COMMENT_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments'
}

export enum ECommentResponses {
  COMMENT_ERROR_FETCH = 'Error fetching all the comments.'
}

export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type TGetAllCommentsFunc = () => Promise<Array<TComment>>;
