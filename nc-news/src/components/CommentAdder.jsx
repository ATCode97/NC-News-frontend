import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import { Form, Button, Card } from "react-bootstrap";

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
    this.setState({
      body: "",
    });
  };

  render() {
    const { body, isLoading, hasError } = this.state;
    if (isLoading) return <Loader />;
    if (hasError)
      return <ErrorPage status={hasError.status} msg={hasError.msg} />;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Card>
          <Card.Body>
            <Form.Control
              as="textarea"
              rows="5"
              className="InputBox"
              style={{ border: "solid", fontSize: 18 }}
              onChange={(event) => this.handleInputChanges(event.target.value)}
              type="text"
              placeholder="Add a Comment Here..."
              value={body}
              required
            />
          </Card.Body>

          <Button
            variant="secondary"
            size="sm"
            type="submit"
            style={{ margin: "10px" }}
          >
            Post comment
          </Button>
        </Card>
      </Form>
    );
  }
}

export default CommentAdder;
