/**
 * @desc        backbone router for pushState page routing
 */
define([
    "app", "controllers/BaseController", "views/LoginView", "models/SessionModel"
], function(app, BaseController, LoginView, SessionModel )
{
    var AppController = _.extend( BaseController, {
        initialize: function() {
            _.bindAll(this);
        },


        showLogin: function() {
            this.show(new LoginView({}), {requiresAuth: false});
        }

    });

  
  //app.router = new AppRouter();
            //app.subrouter = new SubRouter();

            // Create a new session model and scope it to the app global
            // This will be a singleton, which other modules can access
        //    app.session = new SessionModel({ });

        //     Backbone.history.start();
    return AppController;

});