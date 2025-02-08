import usersProd from './constants/users/usersProd';
import urlsProd from './constants/urls/urlsProd';

const environmentsData = {
  prod: {
    users: usersProd,
    urls: urlsProd,
  },
};

const currentEnv = Cypress.env('ENV')?.toLowerCase() || 'prod';
const envData = environmentsData[currentEnv];

export { currentEnv, envData };
