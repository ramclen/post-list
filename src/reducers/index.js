import { combineReducers } from "redux";

const setPosts = (posts = [], action) => {
  if (action.type === "SET_POSTS") {
    return action.payload;
  }
  return posts;
}

const setUser = (users = [], action) => {
  if (action.type === "SET_USER") {
    return [...users, action.payload];
  }
  return users;
}

export default combineReducers({ posts: setPosts, users: setUser })