
var BB = require('backbone');
var _ = require('underscore');
    

var MatchModel = BB.Model.extend({
    url: '/match',
    defaults: [
            ['Carlos', 'Carlos.jpg'],
            ['David', 'David.jpg'],
            ['Monica', 'Monica.jpg'],
            ['Ana', 'Ana.jpg'],
            ['Robert', 'Roberto.jpg'],
            ['Luisa', 'Luisa.jpg'],
            ['Erick', 'Erick.jpg'],
            ['Albert', 'Albert.jpg']
        ],
    initialize: function(){
    }
});

module.exports = MatchModel;
