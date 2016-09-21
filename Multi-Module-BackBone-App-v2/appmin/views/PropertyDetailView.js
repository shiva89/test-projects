define( [
    "app",
    "text!templates/prop-details.html",
        "views/BaseView"
], function ( app, tpl, BaseView) {

    var PropertyDetailView = BaseView.extend( {

        template : _.template( tpl ),

        initialize : function () {
            _.bindAll( this );         
        },

        render : function () {    
              var logged_in = app.session.get('logged_in');
              this.$el.html( this.template({ logged_in:logged_in}));
/*              this.loadGoogleLibraries("maps",
                function(){
                    console.log('maps loaded');
                });*/
            return this;
        }
    } );
    return PropertyDetailView;
} );