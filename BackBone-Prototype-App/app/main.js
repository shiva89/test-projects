/**
 * Main app initialization and initial auth check
 */

require([
    "app",
    "routers/AppRouter"
],
function(app, AppRouter) {

            app.router = new AppRouter();
             Backbone.history.start();

});

