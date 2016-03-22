/**
 * @desc        configure aliases and dependencies
 */

if (typeof DEBUG === 'undefined') DEBUG = true;

require.config({
    baseUrl: appBase,
   // waitSeconds: 20,
    catchError:true,
 paths: {

        'jquery'              : '../assets/lib/jquery.min',
        'underscore'            : '../assets/lib/underscore',         // load lodash instead of underscore (faster + bugfixes)
        'backbone'              : '../assets/lib/backbone',
        'bootstrap.min'         :'../assets/vendor/bootstrap/js/bootstrap.min',
        'async'                  : '../assets/plugins/async',
        'text'                  : '../assets/lib/text'
    },

    // non-AMD lib
    shim: {
        // 'jquery'              : { exports  : '$' },
        'underscore'            : { exports  : '_' },
        'backbone'              : { deps : ['underscore'], exports : 'Backbone' },
        'bootstrap.min'         : ["jquery"]
    }


});
//catching requirejs errors
requirejs.onError = function (err) {
    console.log('custom error catching:');
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }
    throw err;
};


require([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'routers/AppRouter', 
    'models/SessionModel',
    'bootstrap.min',
    'async',
    'text',
    ], 
    function($, _, Backbone,
        app, AppRouter, SessionModel){

           //initialize application
           app.session = new SessionModel();
           app.router = new AppRouter();  
           Backbone.history.start();
});
