define( [
    "app"
], function ( app ) {

    var BaseView = Backbone.View.extend( {
        initialize : function () {
            _.bindAll( this );         
        }

    
    });
    return BaseView;
} );