import Ember from 'ember';

var ApplicationView = Ember.View.extend({
  initFoundation: function () {
    Ember.$(document).foundation();
  }.on('didInsertElement')
});

export default ApplicationView;
