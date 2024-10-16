import { Router } from "express";

import countriesService from "../services/countries.service.js";

const router = Router();

router.get("/available", async (req, res) => {
  return res.send(await countriesService.getAvailableCountries());
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;
  return res.send(await countriesService.getCountryInfo(code));
});

export default router;
