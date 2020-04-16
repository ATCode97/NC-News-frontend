import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

class ArticleList extends Component {
  state = { articles: [], isLoading: true, hasError: null };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = (sort_by) => {
    api
      .getArticles(this.props.topic, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
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
    const { articles, isLoading, hasError } = this.state;
    if (isLoading) return <Loader />;
    if (hasError)
      return <ErrorPage status={hasError.status} msg={hasError.msg} />;

    return (
      <>
        <main className="articlesList">
          <button onClick={() => this.fetchArticles("votes")}>
            SortBy Votes
          </button>
          <button onClick={() => this.fetchArticles("comment_count")}>
            SortBy Comment
          </button>
          <button onClick={() => this.fetchArticles("created_at")}>
            SortBy Created_at
          </button>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </main>
      </>
    );
  }
}

export default ArticleList;
