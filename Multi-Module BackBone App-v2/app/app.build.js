({

    waitSeconds: 20000,
    catchError:true,
//    enforceDefine: true,
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
        //'jquery'              : { exports  : '$' },
        'underscore'            : { exports  : '_' },
        'backbone'              : { deps : ['underscore'], exports : 'Backbone' },
        'bootstrap.min'         : ["jquery"]
    },

    // optimize:'uglify2',
    throwWhen: {
        //If there is an error calling the minifier for some JavaScript,
        //instead of just skipping that file throw an error.
        optimize: true
    },
   // mainConfigFile:'main.js',
    dir: '../appmin',
    removeCombined: false,
    findNestedDependencies: true,
    keepBuildDir: true,
    skipDirOptimize: true,
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'main',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include:['app', 'controllers/BaseController'],
            exclude: ["controllers/AppController","controllers/TestController", "controllers/PropertyController"]
        },
/*        {
            name: 'build-dest/login-loader',
             //include:['routers/AppRouter'],
            exclude: ["controllers/AppController", "controllers/TestController", "controllers/PropertyController"]
        },*/
        {
            // name: 'build-dest/app-loader',
            name: "controllers/AppController",
            //include:['routers/SubRouter'],
            exclude: ['main', 'app' ]
        },
        {

            name: "controllers/TestController",
            // include:['routers/SubRouter'],
            exclude: ['main', 'app' ]
        },
        {

            name: "controllers/PropertyController",
            // include:['routers/SubRouter'],
            exclude: ['main', 'app' ]
        }
        ]

})