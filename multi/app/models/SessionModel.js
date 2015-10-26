/**
 * @desc		stores the POST state and response state of authentication for user
 */
define([
    "app",
    "models/UserModel"
], function(app, UserModel){

    var SessionModel = Backbone.Model.extend({

        // Initialize with negative/empty defaults
        // These will be overriden after the initial checkAuth
        defaults: {
            logged_in: false,
            user_id: ''
        },

        initialize: function(){
            _.bindAll(this);

            // Singleton user object
            // Access or listen on this throughout any module with app.session.user
            this.user = new UserModel({ });
        },


        url: function(){
            return app.API + '/login';
        },

        // Fxn to update user attributes after recieving API response
        updateSessionUser: function( userData ){
            this.user.set( _.pick( userData, _.keys(this.user.defaults) ) );
        },

        /*
         * Check for session from API 
         * The API will parse client cookies using its secret token
         * and return a user object if authenticated
         */
        checkAuth: function(callback, args) {
            var self = this;
            this.fetch({
                cache: false,
                success: function(mod, res){
                    if(!res.error && res.user && res.user.authenticated){
                        self.updateSessionUser( res.user );
                        self.set({ logged_in : true });
                        //app.PseudoUserModel.reset();
                        if('success' in callback) callback.success(mod, res);
                    } else {
                        console.log("Setting logged in to false1. Else");
                        self.set({ logged_in : false });
                        if('error' in callback) callback.error(mod, res);
                    }
                }, error:function(mod, res){
                    console.log("Setting logged in to false. Error");
                    self.set({ logged_in : false });
                    if('error' in callback) callback.error(mod, res);    
                }
            }).complete( function(){
                if('complete' in callback) callback.complete();
            });
        },
        /*
         * Abstracted fxn to make a POST request to the auth endpoint
         * This takes care of the CSRF header for security, as well as
         * updating the user and session after receiving an API response
         */
        postAuth: function(opts, callback, args){
            var self = this; 
            var browserType = navigator.appName+" "+navigator.appCodeName+" "+navigator.appVersion;
            var deviceType = navigator.platform;
            _.extend(opts, {browser_type: browserType,device_type: deviceType});
            
            var postData = _.omit(opts, 'method');
//            if(DEBUG) console.log(postData);
            $.ajax({
                url: this.url(),
                contentType: 'application/json',
                dataType: 'json',
                type: 'POST',
                beforeSend: function(xhr) {
                    // Set the CSRF Token in the header for security
                    // var token = $('meta[name="csrf-token"]').attr('content');
                    //if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                },
                data:  JSON.stringify(opts),
                success: function(res){
                   // console.log("Response =="+res);
                    if( !res.error && (res.user['authenticated'] === true) ){
                        if(_.indexOf(['login', 'signup'], opts.method) !== -1){
                            self.updateSessionUser( res.user || {} );
                            self.set({ user_id: res.user.id, logged_in: true });
                        } else {
                            console.log("Setting logged in to false");
                            self.set({ logged_in: false });
                        }
                        if( callback && 'success' in callback ) callback.success(res);
                    }
                   else if (!res.error && !res.user['authenticated'])
                   {
                       if(_.indexOf(['logout'], opts.method) !== -1){
                           self.set({user_id:null, logged_in:false});
//                           if(app.PseudoUserModel)
//                        	   app.PseudoUserModel.clear().set(new PseudoUserModel());
                           if( callback && 'success' in callback ) callback.success(res);
                       }
                       //Invalid credentials
                       if (callback && 'error' in callback ) callback.error(res);
                   }
                   else {
                        if( callback && 'error' in callback ) callback.error(res);
                    }
                },
                error: function(mod, res){
                    if(callback && 'error' in callback ) callback.error(res);
                }
            }).complete( function(){
                if(callback && 'complete' in callback ) callback.complete(res);
            });
        },
         


        login: function(opts, callback, args){
           this.postAuth(_.extend(opts, {method:'login'}), callback);
        },

        logout: function(opts, callback, args){
        	this.postAuth(_.extend(opts, { method: 'logout' }), callback);
        }
    });
    
    return SessionModel;
});

