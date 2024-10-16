import apiService from "./api.service.js";
import { env } from "../configs/envConfigs.js";

const baseUrl = env.DATE_NAGER_BASE_URL;

class DateNagerService {
  async getAvailableCountries() {
    return apiService.get(`${baseUrl}AvailableCountries`);
  }
}

export default new DateNagerService();
