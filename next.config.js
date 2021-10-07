const { PHASE_DEVELOPMENT_SERVER, PHASE_ } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_USERNAME: 'admin',
        MONGODB_PASSWORD: 'admin',
        MONGODB_CLUSTER: 'cluster0',
        MONGODB_DATABASE: 'my-blog',
      },
    };
  }

  // PRODUCTION VARIABLES
  return {
    env: {
      MONGODB_USERNAME: 'admin',
      MONGODB_PASSWORD: 'admin',
      MONGODB_CLUSTER: 'cluster0',
      MONGODB_DATABASE: 'my-blog',
    },
  };
};
