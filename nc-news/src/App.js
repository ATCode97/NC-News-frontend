import React from "react";
import { Router } from "@reach/router";
import "./styles/global.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import HomePage from "./components/Homepage";
import SingleArticle from "./components/SingleArticle";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <HomePage path="/" />
        <ArticleList path="/topics/:topic" />
        <ArticleList path="/articles" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </div>
  );
};

export default App;
