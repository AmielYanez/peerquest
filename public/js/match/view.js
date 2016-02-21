
var BB = require('backbone');
var hb = require('handlebars');
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
        this.$el.html(this.template(this.model.attributes));
        console.log('asdf');
        return this;
    }
    
});

module.exports = MatchView;
