/**
 * @desc        backbone router for pushState page routing
 */
// require(['config'], function(){

    define([
        "app", "controllers/AppController", "controllers/SanController", "controllers/SubController"
        ], function(app, AppController, SanController, SubController )
        {
            var AppRouter = Backbone.Router.extend({
                initialize: function() {
                    _.bindAll(this);
                },
                routes: {
                    "": "login",
                    "login" : "login",
                    "test" : "showTestView",
                    "propDetail(/:property_id)" : "showPropDetail",
                    "propSearch" : "showPropSearch"
                },

                login: function() {
                    AppController.showLogin();            
                },
                showTestView: function() {
                   SanController.showTestView();            
               },
               showPropDetail: function() {
                   SubController.showPropDetail();
               },
               showPropSearch: function() {
                SubController.showPropSearch();
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