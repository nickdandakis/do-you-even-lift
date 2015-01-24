import Ember from 'ember';

var IndexView = Ember.View.extend({
  initHandlers: function () {
    $('#nl-form').on('submit', function(e) { //use on if jQuery 1.7+
      e.preventDefault();  //prevent form from submitting
      var data = $(this).serializeArray();
      console.log(data);
      console.log();
    });
  }.on('didInsertElement')
});

export default IndexView;
