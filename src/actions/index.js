import jsonPlaceholders from "../api/jsonPlaceholders"
import _ from "lodash";

export const fetchPosts = () => {
  return (dispatch) => {
    jsonPlaceholders.get('/posts').then(res => {
      dispatch({
        type: "SET_POSTS",
        payload: res.data
      });
    })
  }
}

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceholders.get(`/users/${id}`);
  dispatch({
    type: "SET_USER",
    payload: res.data
  })
});

