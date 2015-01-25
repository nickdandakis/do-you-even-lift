import Ember from 'ember';

var IndexView = Ember.View.extend({
  initHandlers: function () {
    var controller = this.controller;
    $('#nl-form').on('submit', function(e) { //use on if jQuery 1.7+
      e.preventDefault();  //prevent form from submitting
      var data = $(this).serializeArray();
      var lift = data[0].value;
      var weight = data[1].value;
      var unit = data[2].value;

      controller.transitionToRoute(lift, weight, unit);
    });
  }.on('didInsertElement')
});

export default IndexView;
