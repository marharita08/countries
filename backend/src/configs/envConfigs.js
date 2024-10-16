import dotenv from "dotenv";

dotenv.config();

const env = {
    PORT: process.env.PORT,
    DATE_NAGER_BASE_URL: process.env.DATE_NAGER_BASE_URL 
}

export { env };
