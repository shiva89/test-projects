define( [
    "app"

], function ( app ) {

    var MainView = Backbone.View.extend( {
        template : null,
        initialize : function () {
            this.template = this.options.template;
            _.bindAll( this );
        },
   
        render : function () {
        	this.$el.html(this.template);            
            return this;
        }
    });
    return MainView;
});