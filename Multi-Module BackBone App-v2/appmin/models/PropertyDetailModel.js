/**
 * @desc		
 */
define([
    "app"
], function(app){

    var PropertyDetailModel = Backbone.Model.extend({

        initialize: function(){
            _.bindAll(this);
        },
        defaults: {
            property_id : null
        },
        getPropertyDetails : function(){

        }
    });
    
    return PropertyDetailModel;
});

