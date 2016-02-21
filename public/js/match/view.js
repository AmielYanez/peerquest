
var BB = require('backbone');
var hb = require('handlebars');
var $ = require('jquery');
    
var MatchView = BB.View.extend({
    template: require('./template.handlebars'),
    id: 'matchView',
    events: {},
    model: require('./model'),
    initialize: function(){
        this.listenTo(this.model, 'change', this.render);
        this.render();
        return this;
    },
    render: function(){
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
    
});

module.exports = MatchView;
