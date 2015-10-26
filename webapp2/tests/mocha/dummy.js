define(['Squire','Sinon','models/SessionModel','routers/AppRouter'], function(Squire, Sinon, SessionModel, AppRouter) {
    var injector = new Squire();
    var SessionModelMock = Sinon.mock(SessionModel);
    var routerMock = Sinon.mock(AppRouter);

    injector.mock('SessionModel', SessionModelMock);
    //Add some sensible behaviour to the mocks here

    injector.mock('router/AppRouter', routerMock);
    //And here
    injector.require(['main'], function (main)
    {
        //Do funky test stuff with main here
        console.log(main);
    });
});