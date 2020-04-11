import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class AuthorHeader extends React.Component {
  render() {
    if (this.props.user) {
      return (<div>{this.props.user.name}</div>)
    }
    return <div> author </div>
  }

}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(e => e.id === ownProps.id)
})

export default connect(mapStateToProps)(AuthorHeader);