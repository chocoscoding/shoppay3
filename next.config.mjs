/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/styles/variables.scss";`,
  },
  devIndicators: {
    // buildActivity: false,
    // appIsrStatus: false,
  },
};

export default nextConfig;
