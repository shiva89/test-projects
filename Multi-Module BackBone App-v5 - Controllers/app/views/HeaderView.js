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
             app.navigater('login');
         },
         ShowPropDetailPage :function (){
             app.navigater('propDetail');
         },
         ShowPropSearchPage :function (){
             app.navigater('propSearch');
         },
         ShowTestPage :function (){
             app.navigater('test');
         }
 });
        return HeaderView;
    });