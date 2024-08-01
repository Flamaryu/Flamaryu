import axios from 'axios';

const http = axios.create({
  baseURL: "https://skillicons.dev/icons?i="
});

export default {
  get(id) {
    return http.get(`${id}`);
  }
};