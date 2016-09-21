define( [
    "app"
], function ( app ) {

    var BaseView = Backbone.View.extend( {
        initialize : function () {
            _.bindAll( this );         
        },
     //common view methods here
      loadGoogleLibraries: function(package, callback){
      	//check if google loader exists
      	//load google loader
      	    if (typeof google === 'object' && typeof google.load === 'function') {
      	    	console.log('STATUS : google loader exists...');
                        this.loadGooglePackages(package, callback);
            } else {
            	console.log('STATUS : google loader doesnot exist...');
                        this.importGoogleLoader(package, callback);
            }

      },

      importGoogleLoader : function(package, callback){
      	console.log('STATUS : importing google loader...');
            var self = this;
      	    var reqq = require;
            reqq(['async!https://www.google.com/jsapi'], function() {
            	console.log('STATUS : importing google loader complete...');
                     self.loadGooglePackages(package, callback);
            });
      },

      loadGooglePackages : function(package, callback){

        //chcek if package is already loaded
      	//load required package with callback
      	 switch(package){
            case "visualization":
               if(typeof google.visualization === 'object'){
               	    console.log('STATUS : google visualization is available...');
                    callback();
               }else{
               	console.log('STATUS : google visualization is not available. Will start loading it now...');
               	    google.load("visualization", "1.1", {'callback': callback, packages: ["geochart"]});
               }

            break;
            case "maps":
             if(typeof google.maps === 'object' && typeof google.maps.places === 'object'){
             	console.log('STATUS : google maps and places API is available.');
                    callback();
             }else{
             	console.log('STATUS : google maps or places API is not available. Will start loading them now...');
             	    google.load('maps', '3', {'callback': callback, other_params:'libraries=places,geometry'});
             }

            break;
            default:

      	 }
      	
         

      }
    });
    return BaseView;
} );