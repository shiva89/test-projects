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
            property_id : null,
            address: null,
            sourceLevel:"Place",
            id: null,
            name: null,
            latitude : null,
            longitude : null,
            geom : null,
            schools : [],
            rent:null,
            price:null,
            crimeReport:null
        },
        getPropertyDetails : function(){
            $.ajax({
                 url: 'getproperty_details',
                 contentType: 'application/json',
                async:false,
                 type: 'POST',
                 success: function (res) {
                    console.log("Successful");
                    console.log(res);
                },
                error: function (mod, res) {
                    
                }
            });
        }
    });
    
    return PropertyDetailModel;
});

