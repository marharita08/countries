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
    return res.send(await countriesService.getCountryInfo(code));
  })
);

export default router;
