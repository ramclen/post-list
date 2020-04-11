import React from "react";
import AuthorHeader from "./AuthorHeader";
import { connect } from "react-redux";
import { fetchPosts, fetchUser } from "../actions"

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList(posts) {
    return posts.map((post) => (
      <div key={post.id} className="item">
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title} a</h2>
            <p>{post.body}</p>
          </div>
          <AuthorHeader id={post.userId} />
        </div>
      </div>
    ));
  }

  render() {
    if (this.props.posts) {
      return (
        <div className="ui relaxed divided list">
          {this.renderList(this.props.posts)}
        </div>
      )
    }
    return <div>Loading</div>


  }
}


const mapStateToProps = (state) => ({ posts: state.posts })

export default connect(mapStateToProps, { fetchPosts, fetchUser })(PostList);