import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import { CardDeck, DropdownButton, Dropdown } from "react-bootstrap";

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
          <DropdownButton id="dropdown-item-button" title="Sort By">
            <Dropdown.Item
              as="button"
              onClick={() => this.fetchArticles("comment_count")}
            >
              Comment Count
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => this.fetchArticles("created_at")}
            >
              Created At
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => this.fetchArticles("votes")}
            >
              Votes
            </Dropdown.Item>
          </DropdownButton>

          {articles.map((article) => {
            return (
              <CardDeck style={{ margin: "10px" }} key={article.article_id}>
                <ArticleCard key={article.article_id} {...article} />
              </CardDeck>
            );
          })}
        </main>
      </>
    );
  }
}

export default ArticleList;
