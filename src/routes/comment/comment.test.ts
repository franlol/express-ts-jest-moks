import { getAllComments } from "./comment.service";
import { TComment } from "./comment.types";

jest.mock('./comment.service');

describe('/comment', () => {
  it('Should return all comments', async (done) => {

    const comments: Array<TComment> = await getAllComments();
    done();

    comments.forEach((comment: TComment) => {
      expect(comment).toHaveProperty('postId');
      expect(typeof comment.postId).toBe('number');

      expect(comment).toHaveProperty('id');
      expect(typeof comment.id).toBe('number');

      expect(comment).toHaveProperty('name');
      expect(typeof comment.name).toBe('string');

      expect(comment).toHaveProperty('email');
      expect(typeof comment.email).toBe('string');

      expect(comment).toHaveProperty('body');
      expect(typeof comment.body).toBe('string');
    });
  });

});
