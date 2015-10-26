require(['build-dest/lib-loader'], function() {
    // require(['build-dest/login-loader','build-dest/app-loader']);
        require(['build-dest/login-loader'],function(){
        	require(['build-dest/app-loader']);
        });

});