/**
 * Created by ayanez on 2/21/16.
 */
var Users = Users || {};

(function () {
    'use strict';

    var UsersCollection = Backbone.Collection.extend({
        model: Users.Model

    });
    Users.Users = new UsersCollection();
})();