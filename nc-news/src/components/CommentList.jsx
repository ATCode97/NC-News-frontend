import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentVote from "./CommentVote";

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

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <>
        <div>
          {comments.map(({ body, comment_id, author, votes, created_at }) => {
            return (
              <section key={comment_id}>
                <p>Posted By: {author}</p>
                <CommentVote type="comments" />
                <p>{body}</p>
                <p>Posted At: {created_at}</p>
              </section>
            );
          })}
        </div>
      </>
    );
  }
}

export default CommentList;
