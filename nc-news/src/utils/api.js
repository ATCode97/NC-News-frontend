import axios from "axios";

const request = axios.create({
  baseURL: "https://northcodersnews2020.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return request
    .get("/articles", { params: { topic } })
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

export const sortByCreatedAt = () => {
  return request
    .get("/articles?sort_by=created_at")
    .then(({ data: { articles } }) => {
      return articles;
    });
};
