import axios from "axios";

class APIService {
  async get(url) {
    const response = await axios.get(url);
    return response.data;
  }
}

export default new APIService();
