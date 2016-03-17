/**
 * @desc        backbone router for pushState page routing
 */

    define([
        "app", "controllers/AppController"
        // "controllers/AppController", "controllers/SanController", "controllers/SubController"
        ], function(app , AppController
            // , AppController, SanController, SubController 
            )
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
                    // app.appController = app.appController || new AppController();
                    // app.appController.showLogin();  
                    AppController.showLogin();            
                },
                showTestView: function() {
                    require(["controllers/SanController"], function(SanController){
                         SanController.showTestView();         
                    });
               },
               showPropDetail: function() {
                    require(["controllers/SubController"], function(SubController){
                         SubController.showPropDetail();      
                    });

               },
               showPropSearch: function() {
                    require(["controllers/SubController"], function(SubController){
                         SubController.showPropSearch(); 
                    });
                   
               }

        });

        return AppRouter;

    });
