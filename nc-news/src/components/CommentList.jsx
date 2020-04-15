import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentVote from "./CommentVote";
import CommentAdder from "./CommentAdder";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api.getAllComments(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  addCommentToList = (newComment) => {
    this.setState((currentState) => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  handleDelete = (event) => {
    console.dir(event.target);
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <>
        <div>
          <CommentAdder
            article_id={this.state.comments[0].article_id}
            addComment={this.addCommentToList}
            username={this.props.username}
          />
          {comments.map(({ body, comment_id, author, votes, created_at }) => {
            return (
              <section key={comment_id}>
                <p>Posted By: {author}</p>
                <CommentVote
                  type="comments"
                  comment_id={comment_id}
                  votes={votes}
                />
                <p>{body}</p>
                <p>Posted At: {created_at}</p>
                {this.props.username === author && (
                  <button className="deleteButton" onClick={this.handleDelete}>
                    Delete Comment
                  </button>
                )}
              </section>
            );
          })}
        </div>
      </>
    );
  }
}

export default CommentList;
