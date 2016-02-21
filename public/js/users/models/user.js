/**
 * Created by ayanez on 2/21/16.
 */
var Users = Users || {};

(function () {
    'use strict';

    Users.Model = BB.Model.extend({
        // you can set any defaults you would like here
        defaults: {
            id: null,
            email: "",
            password: "",
            creationDate:null
        },

        validate: function (attrs) {
            var errors = {};

            //Validate attrs

            if (!_.isEmpty(errors)) {
                return errors;
            }
        }
    });
})();