/**
 * Created by ayanez on 2/21/16.
 */
(function () {
    var AuthModel = Backbone.Model.extend({
        defaults: {
            logged_in: false,
            user_id: '',
            token: ''
        },

        initialize: function(){
            _.bindAll(this);
            UserModel =  require('../users/model');
            this.user = new UserModel({});
        }

    });
    return AuthModel;
})();
