import Ember from 'ember';

var CurlRoute = Ember.Route.extend({
  model: function(params){
    // ∆: dislike this, but the controllerName property isn't working out for me
    return this.controllerFor('mammal').getMammals(params.weight, params.unit);
  }
});

export default CurlRoute;
