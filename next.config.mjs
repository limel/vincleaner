import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "plc.ua",
      "en.bidfax.info",
      "ucars.pro",
      "carfast.express",
      "bidfax.info",
      "auto.ria.com",
      "autobidmaster.com",
      "vincleaner.com",
      "autohistory.online",
      "americamotors.com",
      "bid.cars",
      "auctionauto.fr",
      "vinspy.eu",
      "autoastat.com",
      "carcheck.by",
      "autozona.com.ua",
    ],
  },
};

export default withNextIntl(nextConfig);
