import React from "react";
import { Link } from "@reach/router";
import ArticleVote from "./ArticleVote";

const ArticleCard = ({
  article_id,
  title,
  topic,
  votes,
  comment_count,
  created_at,
}) => {
  //the view more button will navigate it self in to the single article??? how does it know which article?...articleId maybe?

  return (
    <>
      <article className="ArticleCard">
        <p>Title: {title}</p>
        <p>Topic: {topic}</p>
        <p>Comment Count: {comment_count}</p>
        <p>Created At {created_at}</p>
        <ArticleVote votes={votes} article_id={article_id} type={"articles"} />
        <Link to={`/articles/${article_id}`}>View More</Link>
      </article>
    </>
  );
};

export default ArticleCard;
