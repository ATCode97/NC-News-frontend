import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import { Button, CardColumns } from "react-bootstrap";

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
        <main className="ArticlesList">
          <Button variant="info" onClick={() => this.fetchArticles("votes")}>
            Sort By Votes
          </Button>
          <Button
            variant="info"
            onClick={() => this.fetchArticles("comment_count")}
          >
            Sort By Comment
          </Button>
          <Button
            variant="info"
            onClick={() => this.fetchArticles("created_at")}
          >
            Sort By Created
          </Button>

          {articles.map((article) => {
            return (
              <CardColumns key={article.article_id}>
                <ArticleCard key={article.article_id} {...article} />
              </CardColumns>
            );
          })}
        </main>
      </>
    );
  }
}

export default ArticleList;
