import axios from "axios";

class APIService {
  async get(url) {
    const response = await axios.get(url);
    return response.data;
  }

  async post(url, data) {
    const response = await axios.post(url, data);
    return response.data;
  }
}

export default new APIService();
