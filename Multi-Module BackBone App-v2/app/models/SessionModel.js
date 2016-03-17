/**
 * @desc		stores the POST state and response state of authentication for user
 */
define([
    "app",
    "models/UserModel"
], function(app, UserModel){

    var SessionModel = Backbone.Model.extend({

        // Initialize with negative/empty defaults
        // These will be overriden after the initial checkAuth
        defaults: {
            logged_in: false,
            user_id: ''
        },

        initialize: function(){
            _.bindAll(this);
            // Singleton user object
            // Access or listen on this throughout any module with app.session.user
            this.user = new UserModel({ });
        },

        url: function(){
            return app.API + '/login';
        }
});
    return SessionModel;
});

