/**
 * Created by santosh on 3/31/14.
 */

require(['../app/config','../tests/config'], function(){

    console.log('Called...');
    require(['tests/mocha/dummy'], function(){
       console.log('Running za tests') ;
    });
});
