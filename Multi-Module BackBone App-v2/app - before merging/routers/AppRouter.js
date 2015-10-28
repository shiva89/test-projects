/**
 * @desc        backbone router for pushState page routing
 */
// require(['config'], function(){

define([
    "app", "routers/BaseRouter", "views/LoginView", "models/SessionModel"
], function(app, BaseRouter, LoginView, SessionModel )
{
    var AppRouter = BaseRouter.extend({
        initialize: function() {
            _.bindAll(this);
        },
        routes: {
            "": "login",
            "login" : "login"
       },

        login: function() {
            this.show(new LoginView({}), {requiresAuth: false});
        }

    });

  
  //app.router = new AppRouter();
            //app.subrouter = new SubRouter();

            // Create a new session model and scope it to the app global
            // This will be a singleton, which other modules can access
        //    app.session = new SessionModel({ });

        //     Backbone.history.start();
    return AppRouter;

});
    
// });