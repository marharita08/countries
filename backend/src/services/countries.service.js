import dateNagerService from "./date-nager.service.js";
import countriesNowService from "./countries-now.service.js";

class CountriesService {
  async getAvailableCountries() {
    return await dateNagerService.getAvailableCountries();
  }

  async getCountryInfo(countryCode) {
    const countryInfo = await dateNagerService.getCountryInfo(countryCode);
    const flag = await countriesNowService.getFlagUrl(countryCode);
    let population = null;
    if (flag) {
      population = await countriesNowService.getPopulationData(flag.iso3);
    }

    return {
      ...countryInfo,
      population: population?.populationCounts ?? null,
      flagUrl: flag?.flag ?? null
    };
  }
}

export default new CountriesService();
