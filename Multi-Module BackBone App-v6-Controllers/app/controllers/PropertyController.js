/**
 * @desc        backbone router for pushState page routing
 */

define([
    "../app",
    "controllers/BaseController",
    "views/PropertyDetailView",
    "views/PropertySearchView",
    "models/PropertyDetailModel",
    "models/PropertySearchModel"

], function(
         app,
         BaseController,
         PropertyDetailView,
         PropertySearchView,
         PropertyDetailModel,
         PropertySearchModel
        )
{

    var PropertyController = _.extend( BaseController, {
        initialize: function() {
            _.bindAll(this);
        },

        showPropDetail: function() {
            app.propertyDetailModel = app.propertyDetailModel || new PropertyDetailModel();
            this.show(new PropertyDetailView({}), {requiresAuth: false});
        },
        showPropSearch: function() {
            app.propertySearchModel = app.propertySearchModel || new PropertySearchModel();
            this.show(new PropertySearchView({}), {requiresAuth: false});
        }

    });

    return PropertyController;

});
