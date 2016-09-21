/**
 * @desc        backbone router for pushState page routing
 */
// require(["config"], function(){

define([
    "app", "views/HeaderView", "views/FooterView",

], function( app, HeaderView, FooterView
        )
{
    Backbone.View.prototype.close = function() {
        this.remove();
        this.unbind();
        if (this.onClose) {
            this.onClose();
        }
    };
    Backbone.View.prototype.empty_view = function() {
        this.$el.empty();
        this.unbind();
    };
    var BaseController = {
        initialize: function() {
            _.bindAll(this);
            var self = this;
        },

        show: function(view, options) {
           /********************** Render Header **************************/ 
            if (!this.headerView) {
                this.headerView = new HeaderView({});
                this.headerView.setElement($(".header-wrapper")).render();
            }
         /********************** Render Page content***********************/ 
            // Close and unbind any existing page view
            if (this.currentView && this.currentView.close) {
                this.currentView.close();
            }
            var cont_el;
            // Establish the requested view into scope
            this.currentView = view;
            cont_el = $('.content-wrapper');
                // Render inside the page wrapper
                cont_el.html(this.currentView.render().$el);
                 // this.currentView.setElement(cont_el).render();
//            }
            /********************** Render Footer ***********************/ 
            if (this.footerView && this.footerView.empty_view) {
                this.footerView.empty_view();
            }
            this.footerView = new FooterView({});
            var footer_el = $('.footer-wrapper');
            this.footerView.setElement(footer_el).render();
          
        }

    };

    return BaseController;

});

// });