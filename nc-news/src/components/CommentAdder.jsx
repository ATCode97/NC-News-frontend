import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

class CommentAdder extends Component {
  state = {
    body: "",
    isLoading: false,
    hasError: false,
  };

  handleInputChanges = (inputValue) => {
    this.setState({ body: inputValue, isLoading: false });
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
      })
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({
          hasError: { status, msg: data.msg },
          isLoading: false,
        });
      });
  };

  render() {
    const { body, isLoading, hasError } = this.state;
    if (isLoading) return <Loader />;
    if (hasError)
      return <ErrorPage status={hasError.status} msg={hasError.msg} />;

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
            required
          />
          <button>Post comment</button>
        </label>
      </form>
    );
  }
}

export default CommentAdder;
