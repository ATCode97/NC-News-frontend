import React from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

class ArticleList extends React.Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prepProps, prevState) {
    if (prepProps.slug !== this.props.slug) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    api.getArticles(this.props.slug).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <>
        <main>
          <ul className="articlesList">
            {articles.map((article) => {
              return (
                <li key={article.article_id}>
                  <p>Title: {article.title}</p>
                </li>
              );
            })}
          </ul>
        </main>
      </>
    );
  }
}

export default ArticleList;
