import dateNagerService from "./date-nager.service.js";
import countriesNowService from "./countries-now.service.js";

class CountriesService {
  async getAvailableCountries() {
    return await dateNagerService.getAvailableCountries();
  }

  async getCountryInfo(countryCode) {
    const countryInfo = await dateNagerService.getCountryInfo(countryCode);
    const flagUrl = await countriesNowService.getFlagUrl(countryCode);
    const population = await countriesNowService.getPopulationData(
      flagUrl.data.iso3
    );

    return {
      ...countryInfo,
      population,
      flagUrl
    };
  }
}

export default new CountriesService();
