import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT,
  DATE_NAGER_BASE_URL: process.env.DATE_NAGER_BASE_URL,
  COUNTRIES_NOW_BASE_URL: process.env.COUNTRIES_NOW_BASE_URL
};

export { env };
