/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'do-you-even-lift',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // ENV.rootURL = './';
    // ENV.baseURL = '/do-you-even-lift/dist/';
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'img-src': "'self' http://www.google-analytics.com/",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com ", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'script-src': "'self' 'unsafe-inline' http://www.google-analytics.com/analytics.js ",
    'media-src': "'self'"
  };

  return ENV;
};
