import * as axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {},
});

export const Posts = {
  getPosts() {
    return instance.get(`/users`);
  },
};
export const commentsAPI = {
  sendComment(packedData) {
    return instance.post(
      `posts`,
      { packedData },
      { headers: { "Content-type": "application/json; charset=UTF-8" } }
    );
  },
};
export const IceAndFire = {
  people(currentPage, pageSize) {
    return axios.get(
      `https://www.anapioficeandfire.com/api/characters?page=${currentPage}&pageSize=${pageSize}`
    );
  },
};
