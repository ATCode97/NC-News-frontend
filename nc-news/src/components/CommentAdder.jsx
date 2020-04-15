import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    body: "",
  };

  handleInputChanges = (inputValue) => {
    this.setState({ body: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    api
      .postNewComment(this.props.article_id, {
        username: this.props.username,
        ...this.state,
      })
      .then((newComment) => {
        this.props.addComment(newComment);
      });
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="commentBox">
          add a new comment
          <input
            className="inputBox"
            onChange={(event) => this.handleInputChanges(event.target.value)}
            type="text"
            id="commentInput"
            value={body}
          />
          <button>Post comment</button>
        </label>
      </form>
    );
  }
}

export default CommentAdder;
