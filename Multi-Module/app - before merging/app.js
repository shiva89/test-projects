/**
 * @desc        app globals
 */
define([
//    "jquery",
    "underscore",
    "backbone"
    
],
function( _, Backbone) {
    
    var app = {
        root : "./index.html",                     // The root path to run the application through.
        URL : "./index.html",                      // Base application URL
        API : "./index.php",                   // Base API URL (used by models & collections)
        JAVA_API : ""                  // Base API URL (used by models & collections)



    };

    $.ajaxSetup({ cache: false });          // force ajax call on all browsers
    // Global event aggregator
    app.eventAggregator = _.extend({}, Backbone.Events);

    return app;
});
