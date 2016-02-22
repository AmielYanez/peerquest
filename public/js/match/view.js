
var BB = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var MatchModel = require('./model');
    
var MatchView = BB.View.extend({
    template: require('./template.handlebars'),
    id: 'matchView',
    events: {},
    model: new MatchModel(),
    initialize: function(){
        this.listenTo(this.model, 'change', this.render);
        this.render();
        return this;
    },
    render: function(){
        console.log(this.model.get('people'));
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
    
});

module.exports = MatchView;
