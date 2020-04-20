import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentVote from "./CommentVote";
import CommentAdder from "./CommentAdder";
import ErrorPage from "./ErrorPage";
import { Card, CardDeck } from "react-bootstrap";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    hasError: null,
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

  deleteComment = (comment_id) => {
    api
      .deleteComment(comment_id)
      .then(() => {
        this.setState((currentState) => {
          const filteredComments = currentState.comments.filter(
            (comment) => comment.comment_id !== comment_id
          );
          return { comments: filteredComments };
        });
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
    const { comments, isLoading, hasError } = this.state;
    if (isLoading) return <Loader />;
    if (hasError)
      return <ErrorPage status={hasError.status} msg={hasError.msg} />;

    return (
      <div>
        <CommentAdder
          article_id={this.state.comments[0].article_id}
          addComment={this.addCommentToList}
          username={this.props.username}
        />
        {comments.map(({ body, comment_id, author, votes, created_at }) => {
          return (
            <section key={comment_id} className="CommentSection">
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Text>{body}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <CommentVote
                      type="comments"
                      comment_id={comment_id}
                      votes={votes}
                    />
                  </Card.Footer>
                  <Card.Footer>
                    <small className="text-muted">
                      Posted At: {created_at}
                    </small>
                  </Card.Footer>
                  <Card.Footer>
                    <small className="text-muted">Posted By: {author}</small>
                  </Card.Footer>
                  {this.props.username === author && (
                    <button
                      className="deleteButton"
                      onClick={() => this.deleteComment(comment_id)}
                    >
                      Delete Comment
                    </button>
                  )}
                </Card>
              </CardDeck>
            </section>
          );
        })}
      </div>
    );
  }
}

export default CommentList;

// <p>Posted By: {author}</p>
// <CommentVote
//   type="comments"
//   comment_id={comment_id}
//   votes={votes}
// />
// <p></p>
// <p>Posted At: {created_at}</p>
