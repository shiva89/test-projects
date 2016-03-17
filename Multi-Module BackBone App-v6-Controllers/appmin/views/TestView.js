define( [
    "app",
    "text!templates/test.html"

    ], function ( app, TestTpl ) {

        var TestView = Backbone.View.extend( {

            template : _.template( TestTpl ),
            initialize : function () {
                _.bindAll( this );
            },

            render : function () {
             this.$el.html( this.template({}));

             return this;
         }
    });
        return TestView;
    });