/**
 * @desc        backbone router for pushState page routing
 */
define([
    "app", "controllers/BaseController", "views/LoginView"
], function(app, BaseController, LoginView )
{
    var AppController = _.extend( BaseController, {
        initialize: function() {
            _.bindAll(this);
        },


        showLogin: function() {
            this.show(new LoginView({}), {requiresAuth: false});
        }

    });

    return AppController;

});