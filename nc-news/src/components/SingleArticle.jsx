import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";

class SingleArticle extends Component {
  state = { article: [], isLoading: true };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  fetchSingleArticle = () => {
    api.getArticleById(this.props.article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const {
      title,
      body,
      topic,
      article_id,
      votes,
      comment_count,
      created_at,
    } = this.state.article;
    return (
      <article id={article_id}>
        <h3>{title}</h3>
        <p>Topic: {topic}</p>
        <p>Created At: {created_at}</p>
        <p>{body}</p>
        <p>votes: {votes}</p>
        <p>comment Count: {comment_count}</p>
      </article>
    );
  }
}

export default SingleArticle;
