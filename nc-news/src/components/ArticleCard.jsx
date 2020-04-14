import React from "react";

const ArticleCard = ({
  title,
  topic,
  body,
  votes,
  comment_count,
  created_at,
}) => {
  return (
    <>
      <article>
        <p>Title: {title}</p>
        <p>Topic: {topic}</p>
        <p>Vote Count: {votes}</p>
        <p>Comment Count: {comment_count}</p>
        <p>Published At: {created_at} </p>
        <p>{body}</p>
      </article>
    </>
  );
};

export default ArticleCard;
