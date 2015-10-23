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
    mainConfigFile:'loader.js',
    dir: '../appmin',
    //name: "loader",
    removeCombined: true,
    findNestedDependencies: true,
    keepBuildDir: false,
     //   out: "../assets/minified/loader-built.js",
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'config',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',               
                      'underscore',
                      'backbone',
                      'bootstrap.min',
                      'async',
                      'text'
            ]
        },
        {
            name: 'routers/BaseRouter',
             include:["app", "views/HeaderView", "views/FooterView"],
            exclude: ['config']
        },
        {
            name: 'routers/AppRouter',
            // include:['routers/AppRouter'],
            exclude: ['config', 'routers/BaseRouter']
        },
        {
            name: 'routers/SubRouter',
            // include:['routers/SubRouter'],
            exclude: ['config', 'routers/BaseRouter']
        }
        ]

})