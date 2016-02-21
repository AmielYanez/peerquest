(function(){
    var $ = require('jquery');
    var _ = require('underscore');
    var BB = require('backbone');
    
    var MatchView = BB.View.extend({
        id: 'matchView',
        events: {},
        initialize: function(){
            this.listenTo(this.model, change, this.render);
            
        },
        render: function(){}
        
    });
    
})();