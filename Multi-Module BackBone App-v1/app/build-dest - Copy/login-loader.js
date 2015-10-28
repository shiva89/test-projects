require(['build-dest/lib-loader'], function(){
   require(['app', 'routers/AppRouter', 'models/SessionModel'], function (app, AppRouter, SessionModel) {
             app.router = new AppRouter();
            //app.subrouter = new SubRouter();

            // Create a new session model and scope it to the app global
            // This will be a singleton, which other modules can access
            app.session = new SessionModel({ });

             // Backbone.history.start();
   });
});