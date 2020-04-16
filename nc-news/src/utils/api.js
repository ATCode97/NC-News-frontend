import axios from "axios";

const request = axios.create({
  baseURL: "https://northcodersnews2020.herokuapp.com/api",
});

export const getArticles = (topic, sort_by) => {
  return request
    .get("/articles", { params: { topic, sort_by } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getTopics = () => {
  return request.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const sortByVotes = () => {
  return request
    .get("/articles?sort_by=votes")
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const sortByCommentCount = () => {
  return request
    .get("/articles?sort_by=comment_count")
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticleById = (article_id) => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const sortByCreatedAt = () => {
  return request
    .get("/articles?sort_by=created_at")
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const patchVotes = (type, id, inc_votes) => {
  return request.patch(`/${type}/${id}`, { inc_votes });
};

export const getAllComments = (article_id) => {
  return request
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postNewComment = (article_id, newComment) => {
  return request
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`);
};
