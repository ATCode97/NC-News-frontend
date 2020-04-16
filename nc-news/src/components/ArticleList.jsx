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

  fetchArticles = () => {
    api
      .getArticles(this.props.topic)
      .then((articles) => {
        //const params = ????
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

  sortByVotes = () => {
    api.getArticles("votes").then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  sortByComment = () => {
    api.sortByCommentCount().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  sortByDate = () => {
    api.sortByCreatedAt().then((articles) => {
      this.setState({ articles, isLoading: false });
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
          <button onClick={this.sortByVotes}>SortBy Votes</button>
          <button onClick={this.sortByComment}>SortBy Comment</button>
          <button onClick={this.sortByDate}>SortBy Date</button>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </main>
      </>
    );
  }
}

export default ArticleList;
