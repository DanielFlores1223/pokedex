export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGO_URL_DB,
  port: +process.env.PORT || 3000,
  limitPagination: +process.env.LIMIT_PAGINATION || 5,
});
