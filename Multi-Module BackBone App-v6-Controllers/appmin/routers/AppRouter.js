/**
 * @desc        backbone router for pushState page routing
 */

    define([
        "app", "controllers/AppController"
        ], function(app , AppController
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
                    AppController.showLogin();            
                },
                showTestView: function() {
                    require(["controllers/TestController"], function(TestController){
                         TestController.showTestView();         
                    });
               },
               showPropDetail: function() {
                    require(["controllers/PropertyController"], function(PropertyController){
                         PropertyController.showPropDetail();      
                    });
               },
               showPropSearch: function() {
                    require(["controllers/PropertyController"], function(PropertyController){
                         PropertyController.showPropSearch(); 
                    });
                   
               }

        });

        return AppRouter;

    });
