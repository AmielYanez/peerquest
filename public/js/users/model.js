/**
 * Created by ayanez on 2/21/16.
 */
var BB = require('backbone');


var UserModel = BB.Model.extend({

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
