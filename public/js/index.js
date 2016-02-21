(function(){
    var $ = require('jquery');
    var _ = require('underscore');
    var BB = require('backbone');

    // App object
    var App = {};


    
    App.MatchView = BB.View.extend({
        id: 'matchView',
        events: {},
        initialize: function(){
            this.listenTo(this.model, change, this.render);
            
        },
        render: function(){}
        
    });
    
})();