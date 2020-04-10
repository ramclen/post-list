import React from "react";
import AuthorHeader from "./AuthorHeader";

const PostList = () => {
  return [1, 2, 3, 4].map(e => (<div>A POST with <AuthorHeader /></div>));
}

export default PostList;