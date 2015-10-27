/**
 * @desc        configure aliases and dependencies
 */

if (typeof DEBUG === 'undefined') DEBUG = true;

require.config({
    baseUrl: './app',
    waitSeconds: 20000,
    catchError:true,
 paths: {

        'jquery'                : '../assets/js/lib/jquery.min',
        'underscore'            : '../assets/js/lib/underscore',         // load lodash instead of underscore (faster + bugfixes)
        'backbone'              : '../assets/js/lib/backbone',
        'text'                  : '../assets/js/lib/text'
         
    },

    // non-AMD lib
    shim: {
        //'jquery'              : { exports  : '$' },
        'underscore'            : { exports  : '_' },
        'backbone'              : { deps : ['underscore'], exports : 'Backbone' }
    }


});
requirejs.onError = function (err) {
    console.log('custom error catching:');
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }
    throw err;
};

define(["jquery"], function($) {

});
