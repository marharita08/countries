import apiService from "./api.service";

const baseUrl = process.env.REACT_APP_API_URL;

class CountriesService {
  async getAvailableCountries() {
    return await apiService.get(`${baseUrl}countries/available`);
  }

  async getCountryInfo(countryCode) {
    return await apiService.get(`${baseUrl}/countries/${countryCode}`);
  }
}

const countriesService = new CountriesService();

export default countriesService;
