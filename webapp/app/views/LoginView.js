define( [
    "app",
    "text!templates/login.html",
    "models/UserModel",
    "utils",

], function ( app,  LoginTpl, UserModel ) {

    var LoginView = Backbone.View.extend( {

        template : _.template( LoginTpl ),
        initialize : function () {
            _.bindAll( this );
        },
   
        render : function () {
        	this.$el.html( this.template({
                logged_in : app.session.get( "logged_in" )
            }));
            
            return this;
        }
    });
    return LoginView;
});