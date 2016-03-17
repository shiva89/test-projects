/**
 * @desc        stores the POST state and response state of authentication for user
 */
define([
    "app"
], function (app) {

    var PropertySearchModel = Backbone.Model.extend({

        initialize: function () {
            _.bindAll(this);

        },

        defaults: {

        }

    });

    return PropertySearchModel;
});

