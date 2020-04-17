import React, { Component } from "react";
import { Router } from "@reach/router";
import "./styles/global.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import HomePage from "./components/Homepage";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  state = {
    loggedInUser: {
      username: "jessjelly",
      avatar_url:
        "https://i.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
      name: "Jess Jelly",
    },
  };
  render() {
    return (
      <div className="App">
        <Header {...this.state.loggedInUser} />
        <NavBar />
        <Router className="main-content">
          <HomePage path="/" />
          <ArticleList path="/topics/:topic" />
          <ArticleList path="/articles" />
          <SingleArticle
            path="/articles/:article_id"
            username={this.state.loggedInUser.username}
          />
          <ErrorPage default status={404} msg="Page Not found" />
        </Router>
      </div>
    );
  }
}

export default App;
