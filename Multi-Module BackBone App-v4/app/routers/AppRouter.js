/**
 * @desc        backbone router for pushState page routing
 */
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
            "login" : "login",
            "*any" : "noMatch"
       },

        login: function() {
            this.show(new LoginView({}), {requiresAuth: false});
        },

        noMatch : function(){

            var hash = location.hash.replace("#","");
            var arg1 = hash.split('/')[0];

            switch(arg1){
                case 'propDetail':
                case 'propSearch':
                app.loadSubRouter(hash);
                break;
                case 'test':
                app.loadSanRouter(hash);
                break;
          }  
        }

    });

    return AppRouter;

});