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

    var SubController = _.extend( BaseController, {
        initialize: function() {
            _.bindAll(this);
        },

        showPropDetail: function(property_id) {
            if(!app.PropertyDetailModel){
                app.PropertyDetailModel = new PropertyDetailModel();
            }
            this.show(new PropertyDetailView({}), {requiresAuth: false});
        },
        showPropSearch: function() {console.log('in sub router- showPropSearch');
           if(!app.PropertySearchModel){
                app.PropertySearchModel = new PropertySearchModel();
            }console.log('no error in model init');
            this.show(new PropertySearchView({}), {requiresAuth: false});
        }

    });

    return SubController;

});
