/**
 * @desc        backbone router for pushState page routing
 */

define([
    "../app",
    "routers/BaseRouter",
    "views/PropertyDetailView",
    "views/PropertySearchView",
    "models/PropertyDetailModel",
    "models/PropertySearchModel"

], function(
         app,
         BaseRouter,
         PropertyDetailView,
         PropertySearchView,
         PropertyDetailModel,
         PropertySearchModel
        )
{

    var AppRouter = Backbone.Router.extend({
        initialize: function() {
            _.bindAll(this);
            var self = this;
        },

        routes: {
            "propDetail(/:property_id)" : "showPropDetail",
            "propSearch" : "showPropSearch"
        },

        propDetail: function(property_id) {
            if(!app.PropertyDetailModel){
                app.PropertyDetailModel = new PropertyDetailModel();
            }
            this.show(new PropertyDetailView({}), {requiresAuth: false});
        },
        propSearch: function(property_id) {
           if(!app.PropertySearchModel){
                app.PropertySearchModel = new PropertySearchModel();
            }
            this.show(new PropertySearchView({}), {requiresAuth: false});
        }

    });

    return AppRouter;

});
