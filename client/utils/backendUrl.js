const backendUrl =
  process.env.NODE_ENV === "production"
    ? process.env.BACKENDURL_PRODUCTION
    : process.env.BACKENDURL_DEV;

export default backendUrl;