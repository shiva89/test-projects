/**
 * @desc        backbone router for pushState page routing
 */

define([
    "../app",
    "controllers/BaseController",
    "views/TestView"

], function(
         app,
         BaseController,
         TestView
        )
{

    var TestController = _.extend( BaseController, {
        initialize: function() {
            _.bindAll(this);
        },

        showTestView: function() {
            this.show(new TestView({}), {requiresAuth: false});
        }

    });

    return TestController;

});
