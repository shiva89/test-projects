define( [
    "app",
    "text!templates/test.html",
    "views/BaseView"

    ], function ( app, TestTpl, BaseView ) {

        var TestView = BaseView.extend( {

            template : _.template( TestTpl ),
            initialize : function () {
                _.bindAll( this );
            },

            render : function () {
             this.$el.html( this.template({}));
/*             this.loadGoogleLibraries("visualization",
                function(){
                    console.log('visualization loaded');
                });*/
             return this;
         }
    });
        return TestView;
    });