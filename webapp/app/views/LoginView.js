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
            events: {
                'click #logMeIn' : 'ShowPropDetailsView'
            },
            render : function () {
               this.$el.html( this.template({
                logged_in : app.session.get( "logged_in" )
            }));
               
               return this;
           },
           ShowPropDetailsView :function (){
            require(['build-dest/app-loader'], function() {
                console.log('out ->'+app.subrouter);
                _.defer(function(){
                    console.log('in ->'+app.subrouter);
                    app.subrouter.navigate('propSearch', true);
                });
                
            });

        }
    });
        return LoginView;
    });