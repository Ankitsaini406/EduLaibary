import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config();

const nextConfig: NextConfig = {

  env: {
        // google key
        GOOGLE_PROJECT_ID: process.env.NEXT_APP_GOOGLE_PROJECT_ID,
        GOOGLE_PRIVATE_KEY_ID: process.env.NEXT_APP_GOOGLE_PRIVATE_KEY_ID,
        GOOGLE_PRIVATE_KEY: process.env.NEXT_APP_GOOGLE_PRIVATE_KEY,
        GOOGLE_CLIENT_EMAIL: process.env.NEXT_APP_GOOGLE_CLIENT_EMAIL,
        GOOGLE_SHEET_ID: process.env.NEXT_APP_GOOGLE_SHEET_ID,
  }

};

export default nextConfig;
