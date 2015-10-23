require.config({
    baseUrl: '/app',
    urlArgs: 'now=' + Date.now(),
    paths: {
        tests: '../tests/',
        Squire                : '../assets/test/Squire',
        Sinon : '../assets/test/Sinon'
    },
    shim: {
        //'jquery'                : { exports  : '$' },
        'Sinon'            : { exports  : 'sinon' }
    }

});