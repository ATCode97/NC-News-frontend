import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article_id, title, topic }) => {
  //the view more button will navigate it self in to the single article??? how does it know which article?...articleId maybe?

  return (
    <>
      <article>
        <p>Title: {title}</p>
        <p>Topic: {topic}</p>
        <Link to={`/articles/${article_id}`}>View More</Link>
      </article>
    </>
  );
};

export default ArticleCard;
