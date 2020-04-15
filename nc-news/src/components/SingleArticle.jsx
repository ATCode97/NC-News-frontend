import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleVote from "./ArticleVote";
import CommentList from "./CommentList";

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
        <ArticleVote votes={votes} article_id={article_id} type={"articles"} />
        <p>comment Count: {comment_count}</p>
        <CommentList article_id={article_id} />
      </article>
    );
  }
}

export default SingleArticle;
