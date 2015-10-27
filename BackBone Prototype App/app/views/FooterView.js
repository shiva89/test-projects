define( [
    "app",
    "text!templates/footer.html"
], function ( app, FooterTpl ) {

    var FooterView = Backbone.View.extend( {

        template : _.template( FooterTpl ),
     //   el            : '.footer',
        initialize : function () {
            _.bindAll( this );         
        },

        render : function () {    
            this.$el.html( this.template());
            return this;
        }
    } );
    return FooterView;
} );