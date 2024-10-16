import apiService from "./api.service.js";
import { env } from "../configs/envConfigs.js";

const baseUrl = env.DATE_NAGER_BASE_URL;

class DateNagerService {
  async getAvailableCountries() {
    return await apiService.get(`${baseUrl}AvailableCountries`);
  }

  async getCountryInfo(countryCode) {
    return await apiService.get(`${baseUrl}CountryInfo/${countryCode}`);
  }
}

export default new DateNagerService();
