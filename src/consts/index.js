// Env variables
const API_URL = process.env.API_URL || 'http://node-env.eba-uszux3ip.us-east-1.elasticbeanstalk.com/';

// Utils
const decorateWithAPIHost = (url) => `${API_URL}/api/${url}`;

// URLs
export const URL_API_USERS = decorateWithAPIHost('users');

// Message error
export const MESSAGE_ERROR_API_USERS = 'Something went wrong to fetch API.';