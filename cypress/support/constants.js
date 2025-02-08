import usersProd from './constants/users/usersProd';
import urlsProd from './constants/urls/urlsProd';
import endpointsProd from './constants/endpoints/endpointsProd';

const environmentsData = {
  prod: {
    users: usersProd,
    urls: urlsProd,
    endpointsProd: endpointsProd,
  },
};

const currentEnv = Cypress.env('ENV')?.toLowerCase() || 'prod';
const envData = environmentsData[currentEnv];

export { currentEnv, envData };
