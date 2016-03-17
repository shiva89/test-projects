define( [
    "app",
    "text!templates/login.html",
    "models/UserModel"

    ], function ( app,  LoginTpl, UserModel ) {

        var LoginView = Backbone.View.extend( {

            template : _.template( LoginTpl ),
            initialize : function () {
                _.bindAll( this );
            },
            events: {
                'click #logMeIn' : 'ShowPropSearchView'
            },
            render : function () {
             this.$el.html( this.template({
                logged_in : app.session.get( "logged_in" )
            }));

             return this;
         },
         ShowPropSearchView :function (){
           app.router.navigate('test', true);
        }
    });
        return LoginView;
    });