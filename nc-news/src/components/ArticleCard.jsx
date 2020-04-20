import React from "react";
import { Link } from "@reach/router";
import ArticleVote from "./ArticleVote";
import { Card } from "react-bootstrap";

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
    <Card style={{ margin: "10px" }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>Topic: {topic}</Card.Text>
        <Card.Text>Comment Count: {comment_count}</Card.Text>
        <Card.Text>Created At: {created_at}</Card.Text>
        <ArticleVote votes={votes} article_id={article_id} type={"articles"} />
        <Link to={`/articles/${article_id}`}>View More</Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
