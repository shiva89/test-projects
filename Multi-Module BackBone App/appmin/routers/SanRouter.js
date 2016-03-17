/**
 * @desc        backbone router for pushState page routing
 */

define([
    "../app",
    "routers/BaseRouter",
    "views/TestView"

], function(
         app,
         BaseRouter,
         TestView
        )
{

    var SanRouter = BaseRouter.extend({
        initialize: function() {
            _.bindAll(this);
        },
        routes: {
            "test" : "showTestView"
        },

        showTestView: function() {
            this.show(new TestView({}), {requiresAuth: false});
        }

    });

    return SanRouter;

});
