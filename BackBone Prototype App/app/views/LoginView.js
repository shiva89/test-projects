define( [
    "app",
    "text!templates/login.html"

], function ( app,  LoginTpl ) {

    var LoginView = Backbone.View.extend( {

        template : _.template( LoginTpl ),
        initialize : function () {
            _.bindAll( this );
        },
   
        render : function () {
        	this.$el.html( this.template());            
            return this;
        }
    });
    return LoginView;
});