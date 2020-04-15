import React from "react";
import { Link } from "@reach/router";
import ArticleVote from "./ArticleVote";

const ArticleCard = ({ article_id, title, topic, votes }) => {
  //the view more button will navigate it self in to the single article??? how does it know which article?...articleId maybe?

  return (
    <>
      <article>
        <p>Title: {title}</p>
        <p>Topic: {topic}</p>
        <ArticleVote votes={votes} article_id={article_id} type={"articles"} />
        <Link to={`/articles/${article_id}`}>View More</Link>
      </article>
    </>
  );
};

export default ArticleCard;
