import jsonPlaceholders from "../api/jsonPlaceholders"
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
}

export const fetchPosts = () => (dispatch) => jsonPlaceholders.get('/posts').then(res => {
  dispatch({
    type: "SET_POSTS",
    payload: res.data
  });
})

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholders.get(`/users/${id}`);
  dispatch({
    type: "SET_USER",
    payload: res.data
  })
};

