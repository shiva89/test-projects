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
            name: 'build-dest/lib-loader',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',               
                      'underscore',
                      'backbone',
                      'bootstrap.min',
                      'async',
                      'text', "app", "views/HeaderView", "views/FooterView", 'routers/BaseRouter'
            ],
           
        },
        // {
        //     name: 'build-dest/core-loader',
        //      include:["app", "views/HeaderView", "views/FooterView"],
        //     exclude: ['build-dest/lib-loader']
        // },
        {
            name: 'build-dest/login-loader',
             //include:['routers/AppRouter'],
            exclude: ['build-dest/lib-loader']
        },
        {
            name: 'build-dest/app-loader',
             //include:['routers/SubRouter'],
            exclude: ['build-dest/lib-loader']
        },
        {
            name : 'loader',
            exclude: ['build-dest/login-loader','build-dest/app-loader', 'build-dest/lib-loader']
        }
        ]

})