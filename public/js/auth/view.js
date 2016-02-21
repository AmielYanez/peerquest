/**
 * Created by ayanez on 2/21/16.
 */
var BB = require('backbone');
var hb = require('handlebars');
var $ = require('jquery');

var AuthView = BB.View.extend({
    template: require('./template.handlebars'),
    id: 'AuthView',
    events: {},
    model: require('./model'),
    initialize: function(){
        this.render();
        return this;
    },
    render: function(){
        this.$el.html(this.template());
        return this;
    }

});

module.exports = AuthView;
