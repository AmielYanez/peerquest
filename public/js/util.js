
var _ = require('underscore');
var hb = require('handlebars/runtime')['default'];

hb.registerHelper('randomMatch', function(items, options) {
  
    var out = "";
    
    var arr = _.sortBy(items, function(){
        return Math.random();
    });
    
    _.each(arr, function(val, i, i){
        out+= options.fn(val);
    });
    
    console.log(out, items, options);

    return out;

});