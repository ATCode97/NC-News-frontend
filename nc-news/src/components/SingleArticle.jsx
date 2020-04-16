import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleVote from "./ArticleVote";
import CommentList from "./CommentList";
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = { article: [], isLoading: true, hasError: null };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  fetchSingleArticle = () => {
    api
      .getArticleById(this.props.article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
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
    const { isLoading, hasError } = this.state;
    if (isLoading) return <Loader />;
    if (hasError)
      return <ErrorPage status={hasError.status} msg={hasError.msg} />;
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
        <p>Created at: {created_at}</p>
        <p>{body}</p>
        <ArticleVote votes={votes} article_id={article_id} type={"articles"} />
        <p>Comment count: {comment_count}</p>
        <CommentList article_id={article_id} username={this.props.username} />
      </article>
    );
  }
}

export default SingleArticle;
