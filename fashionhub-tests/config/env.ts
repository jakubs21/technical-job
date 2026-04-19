type Env = 'local' | 'staging' | 'prod';

const ENV = (process.env.TEST_ENV as Env) || 'prod';

const baseUrls = {
  local: 'http://localhost:4000/fashionhub/',
  staging: 'https://staging-env/fashionhub/',
  prod: 'https://pocketaces2.github.io/fashionhub/'
};

export const BASE_URL = baseUrls[ENV];