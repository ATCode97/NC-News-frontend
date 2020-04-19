import React from "react";
import { Link } from "@reach/router";
import ArticleVote from "./ArticleVote";
import { Card, Button } from "react-bootstrap";

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
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{topic}</Card.Title>
        <Card.Text>
          Topic: {topic}
          Comment Count: {comment_count}
          Created At: {created_at}T
        </Card.Text>
        }
        <ArticleVote votes={votes} article_id={article_id} type={"articles"} />
        <Link to={`/articles/${article_id}`}>View More</Link>
      </Card.Body>
    </Card>

    // {/* <Button variant="primary">Go somewhere</Button> */}
  );
};

export default ArticleCard;
