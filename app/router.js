import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("deadlift", {path: "deadlift/:weight/:unit"});
  this.route("bench", {path: "bench/:weight/:unit"});
  this.route("squat", {path: "squat/:weight/:unit"});
  this.route("press", {path: "press/:weight/:unit"});
  this.route("curl", {path: "curl/:weight/:unit"});
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
      'page': this.get('url'),
      'title': this.get('url')
    });
  }.on('didTransition')
});

export default Router;
