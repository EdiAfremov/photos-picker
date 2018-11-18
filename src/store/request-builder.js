import axios from 'axios';
export default class RequestBuilder {
  static sendRequest({ query, imageType, safeSearch, page, perPage }) {
    const api = '10682595-647967fb05606b381189475e9';
    const uri = `https://pixabay.com/api/?key=${api}&q=${query}&image_type=${imageType}&safesearch=${safeSearch}&page=${page}&per_page=${perPage}`;

    return axios
      .get(uri)
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
}
