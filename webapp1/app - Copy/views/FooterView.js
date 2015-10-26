define( [
    "app",
    "text!templates/footer.html",
    "utils"
], function ( app, FooterTpl ) {

    var FooterView = Backbone.View.extend( {

        template : _.template( FooterTpl ),
     //   el            : '.footer',
        initialize : function () {
            _.bindAll( this );         
        },

        render : function () {    
              var logged_in = app.session.get('logged_in');
              this.$el.html( this.template({ logged_in:logged_in}));
            return this;
        }
    } );
    
    
    

    return FooterView;
} );