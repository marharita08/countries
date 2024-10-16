import apiService from "./api.service.js";
import { env } from "../configs/envConfigs.js";

const baseUrl = env.COUNTRIES_NOW_BASE_URL;

class CountriesNowService {
  async getPopulationData(countryCode) {
    return await apiService.post(`${baseUrl}countries/population`, {
      iso3: countryCode
    });
  }

  async getFlagUrl(countryCode) {
    return await apiService.post(`${baseUrl}countries/flag/images`, {
      iso2: countryCode
    });
  }
}

export default new CountriesNowService();
