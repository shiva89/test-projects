/**
 * Main app initialization and initial auth check
 */

require([
    "app",
    "routers/AppRouter",
    "routers/SubRouter",
    "models/SessionModel"
    
],
function(app, AppRouter, SubRouter, SessionModel) {

            app.router = new WebRouter();
            app.subrouter = new SubRouter();

            // Create a new session model and scope it to the app global
            // This will be a singleton, which other modules can access
            app.session = new SessionModel({ });

             Backbone.history.start();

});

