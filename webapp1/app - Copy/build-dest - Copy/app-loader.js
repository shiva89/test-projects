require(['build-dest/lib-loader'], function(){
	require(['app', 'routers/SubRouter' ], function (app, SubRouter) {
		app.subrouter = new SubRouter();
	});
});