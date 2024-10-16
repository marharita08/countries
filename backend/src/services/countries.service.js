import dateNagerService from "./date-nager.service.js";

class CountriesService {
  async getAvailableCountries() {
    return dateNagerService.getAvailableCountries();
  }
}

export default new CountriesService();
