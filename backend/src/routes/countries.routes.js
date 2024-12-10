import { Router } from "express";

import countriesService from "../services/countries.service.js";
import { asyncHandler } from "../middlewares/async-handler.middleware.js";

const router = Router();

router.get(
  "/available",
  asyncHandler(async (req, res) => {
    return res.send(await countriesService.getAvailableCountries());
  })
);

router.get(
  "/:code",
  asyncHandler(async (req, res) => {
    const { code } = req.params;
    console.log(`Received request for country with code: ${code}`);
    try {
      const countryInfo = await countriesService.getCountryInfo(code);
      console.log("Country info:", countryInfo);
      return res.send(countryInfo);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);

export default router;
