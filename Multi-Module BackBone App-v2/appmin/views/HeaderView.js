define( [
    "app",
    "text!templates/header.html",
    "models/UserModel"
    ], function ( app,  HeaderTpl, UserModel ) {

        var HeaderView = Backbone.View.extend( {

            template : _.template( HeaderTpl ),
            initialize : function () {
                _.bindAll( this );
            // Listen for session logged_in state changes and re-render

        },
        events: {
            'click #login' : 'ShowLoginPage',
            'click #propDetail' : 'ShowPropDetailPage',
            'click #propSearch' : 'ShowPropSearchPage',
            'click #test' : 'ShowTestPage'
        },     
        render : function () {
        	this.$el.html( this.template({
                logged_in : app.session.get( "logged_in" )
            }));

            return this;
        },
        ShowLoginPage :function (){
             app.router.navigate('login', true);
         },
         ShowPropDetailPage :function (){
             app.router.navigate('propDetail', true);
         },
         ShowPropSearchPage :function (){
             app.router.navigate('propSearch', true);
         },
         ShowTestPage :function (){
             app.router.navigate('test', true);
         }
 });
        return HeaderView;
    });