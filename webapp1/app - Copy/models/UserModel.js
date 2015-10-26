/**
 * @desc        stores the POST state and response state of authentication for user
 */
define([
    "app",
    "utils"
], function (app) {

    var UserModel = Backbone.Model.extend({

        initialize: function () {
            _.bindAll(this);

        },

        defaults: {
            authenticated: false,
            session_id: null,
            user_id: '',
            user_type:'',
            username: '',
            user_email: '',
            first_name: '',
            last_name: '',
            phone : '',
            profile_score:'',
            investment_amount:'',
            default_page:'plan',
            reset_pwd : false
        },

        url: function () {
            return app.API + '/user';
        }

    });

    return UserModel;
});

