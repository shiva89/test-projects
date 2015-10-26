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
            app.navigater('propSearch');
            
            // if(app.subrouter){
            //     app.subrouter.navigate('propSearch', true);
            // }else{
            // require(['routers/SubRouter'], function(SubRouter){
            //     app.subrouter = new SubRouter();
            //     app.subrouter.navigate('propSearch', true);
            // });
            // }

        }
    });
        return LoginView;
    });