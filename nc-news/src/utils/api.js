import axios from "axios";

const request = axios.create({
  baseURL: "https://northcodersnews2020.herokuapp.com/api",
});

export const getArticles = () => {
  return request.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getTopics = (slug) => {
  return request.get("/topics", { params: {} }).then(({ data: { topics } }) => {
    return topics;
  });
};
