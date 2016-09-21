define( [
    "app",
    "text!templates/header.html"
], function ( app, HeaderTpl ) {

    var HeaderView = Backbone.View.extend( {

        template : _.template( HeaderTpl ),
        initialize : function () {
            _.bindAll( this );
        },
        events : {

        },        
        render : function () {
        	this.$el.html( this.template());
            return this;
        }
    });
    return HeaderView;
});