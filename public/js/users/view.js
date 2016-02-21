/**
 * Created by ayanez on 2/21/16.
 */
var BB = require('backbone');
var hb = require('handlebars');
var $ = require('jquery');

var UserView = BB.View.extend({
    template: require('./template.handlebars'),
    id: 'UserView',
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

module.exports = UserView;
