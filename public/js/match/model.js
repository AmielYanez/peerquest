
var BB = require('backbone');
var _ = require('underscore');
    

var MatchModel = BB.Model.extend({
    url: '/match',
    attributes: [
        ['Carlos', 'url'],
        ['David', 'url'],
        ['Monica', 'url'],
        ['Ana', 'url']
    ],
    random: function(){
        var arr = [];
        arr[this.attributes.length -1] = '';
        
        arr = _.map(arr, function(val, i){
            return i;
        });
        
        arr = _.sortBy(this.arr, function(){
            return Math.random();
        });
        
        return arr;
    },
    initialize: function(){
    }
});

module.exports = MatchModel;
