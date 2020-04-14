import React from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard";

class ArticleList extends React.Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    api.getArticles(this.props.topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  sortByVotes = () => {
    api.sortByVotes().then((articles) => {
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
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
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
