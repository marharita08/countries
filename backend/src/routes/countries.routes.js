import { Router } from "express";

import countriesService from "../services/countries.service.js";

const router = Router();

router.get("/available", async (req, res) => {
  return res.send(await countriesService.getAvailableCountries());
});

export default router;
