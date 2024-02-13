import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ru", "pl", "uk"],

  // Used when no locale matches
  defaultLocale: "ru",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en|pl|uk)/:path*"],
};
