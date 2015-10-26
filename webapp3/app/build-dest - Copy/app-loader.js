// require(['build-dest/lib-loader'], function(){
require(['build-dest/login-loader'], function(){
	require(['app', 'routers/SubRouter' ], function (app, SubRouter) {
		app.subrouter = new SubRouter();
		//if(!Backbone.History.started){console.log('History has not stated');
			Backbone.history.start();
		//}
	});
});