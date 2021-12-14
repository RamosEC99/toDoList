export type Action = {
    type: string,
    payload: string
}

export const getPosts = (posts: string): Action => ({ type: 'GET_POSTS', payload: posts });
export const addPost = (post: string): Action => ({ type: 'ADD_POST', payload: post });
export const updatePost = (post: string): Action => ({ type: 'UPDATE_POST', payload: post });
export const deletePost = (id: string): Action => ({ type: 'DELETE_POST', payload: id });