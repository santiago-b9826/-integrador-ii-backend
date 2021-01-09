/**
 * Server configuration
 */
const port = process.env.DEV ? 5000 : process.env.PORT;
const morganMode = process.env.DEV ? 'dev' : 'tiny';
const USER_POOL_ID = process.env.USER_POOL_ID
const CLIENT_ID = process.env.CLIENT_ID
const POOL_REGION = 'us-east-1'

module.exports = {
  USER_POOL_ID,
  CLIENT_ID,
  POOL_REGION,
  port,
  morganMode,
};
