// require(['build-dest/lib-loader'], function(){
	require(['app', 'routers/AppRouter', 'models/SessionModel'], function (app, AppRouter, SessionModel) {
		app.router = new AppRouter();
            //app.subrouter = new SubRouter();

            // Create a new session model and scope it to the app global
            // This will be a singleton, which other modules can access
            app.session = new SessionModel({ });
            //Backbone.history.start();

             //Helper functions for app navigater -- START
            var startHistory = function(){
                 if(Backbone.History.started){
                 Backbone.history.stop();
                 Backbone.history.start();
               }else{
                 Backbone.history.start();
               }
            };

            app.loadSubRouter = function(route){
              require(['routers/SubRouter'], function(SubRouter){
               app.subrouter = app.subrouter || new SubRouter();
               startHistory();
               app.subrouter.navigate(route, true);
             });
            };

            app.loadSanRouter = function(route){
              require(['routers/SanRouter'], function(SanRouter){
               app.sanRouter = app.sanRouter || new SanRouter();
               startHistory();
               app.sanRouter.navigate(route, true);
             });
            };

             app.router = new AppRouter();        

        //Helper functions for app navigater  -- END


          //Calling the function on load
         // app.navigater(hash);
          startHistory();

            // All navigation that is relative should be passed through the navigate
            // method, to be processed by the router. If the link has a `data-bypass`
            // attribute, bypass the delegation completely.
            $('body').on("click", "a:not([data-bypass])", function(evt) {
              evt.preventDefault();
              var href = $(this).attr("href").replace("#","");
              app.router.navigate(href, true);
             //startHistory();
            });

            
          });
// });