define( [
    "app",
    "text!templates/header.html",
    "models/UserModel",
    "utils",

], function ( app,  HeaderTpl, UserModel ) {

    var HeaderView = Backbone.View.extend( {

        template : _.template( HeaderTpl ),
        initialize : function () {
            _.bindAll( this );
            // Listen for session logged_in state changes and re-render

        },
        events : {

        },        
        render : function () {
        	this.$el.html( this.template({
                logged_in : app.session.get( "logged_in" )
            }));
            
            return this;
        }
    });
    return HeaderView;
});