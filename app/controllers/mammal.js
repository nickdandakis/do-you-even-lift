import Ember from 'ember';

var MammalController = Ember.Controller.extend({
  getMammals: function(weight, unit){
    if(unit === 'lbs'){
      weight = Math.round(weight * 0.454);
      unit = 'kg';
    }

    var url = './data.json';
    return Ember.$.getJSON(url).then(function(data){
      var result = [];
      Ember.$.each(data, function(i, val){
        if(val.weight <= weight){
          result.push({"mammal": val.mammal});
          weight -= val.weight;
        }

        if(weight === 0 && result.length > 0) {
          return false;
        }
      });

      result.reverse();
      if(result.length > 1){
        Ember.$.each(result, function(i, val){
          if(i === result.length - 1){
            val.mammal += ",";
            return false;
          } else {
            val.mammal += " on top of a fuckin'";
          }
        });
      }
      return result;
    });
  }
});

export default MammalController;
