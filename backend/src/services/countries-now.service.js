import apiService from "./api.service.js";
import { env } from "../configs/envConfigs.js";

const baseUrl = env.COUNTRIES_NOW_BASE_URL;
const NOT_FOUND_CODE = 404;

class CountriesNowService {
  async getPopulationData(countryCode) {
    return this.handleResponse(
      async () =>
        await apiService.post(`${baseUrl}countries/population`, {
          iso3: countryCode
        }),
      countryCode,
      "Population"
    );
  }

  async getFlagUrl(countryCode) {
    return this.handleResponse(
      async () =>
        await apiService.post(`${baseUrl}countries/flag/images`, {
          iso2: countryCode
        }),
      countryCode,
      "Flag"
    );
  }

  async handleResponse(fn, countryCode, property) {
    try {
      return (await fn()).data;
    } catch (error) {
      if (error.response?.status === NOT_FOUND_CODE) {
        console.error(
          `${property} data for country code "${countryCode}" not found.`
        );
        return null;
      }
      throw error;
    }
  }
}

export default new CountriesNowService();
