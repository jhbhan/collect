const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("./AppSettings");
const ZoomStrategy = require('@giorgosavgeris/passport-zoom-oauth2').Strategy;


const User = mongoose.model('users');

//these two used for cookie.
passport.serializeUser((user,done) => {//need this funciton to let the code know that we already logged in to this person. sends a unique identifier

    done(null,user.id);//done is callback. call back after we finish
    //this user.id is not googleid. it's a unique mongo id

});

passport.deserializeUser((id,done) => {//turn the id to a mongoose object
    User.findById(id)
    .then(user=>{
        done(null,user);
    });//find the id, then return user
});//user model instance is added to req objet as req.user

//creates a new instance of google strategy
//tells passport which startegy to make use to authenticate: google
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleCliendId,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback", //route user will be sent to after the user is authenticated
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne(
                {
                    googleId:profile.id
                }) // this returns a promise
            
            if(existingUser){
                 return done(null,existingUser);//two arguments, error object, user record
            }
            const user = await new User({googleId: profile.id,
                firstName: profile.name.given_name,
                lastName: profile.name.family_name,}).save();
                console.log(user);
            done(null,user);         
        }
    )
);
//accessToken allows us to different stuff with the account itself
//refreshTOken allows us to refersh the accesstoken -> update the accesstoken whenever


passport.use(new ZoomStrategy({
    clientID: keys.zoomClientId,
    clientSecret: keys.zoomClientSecret,
    callbackURL: keys.zoomRedirectURL
  },
  function(accessToken, refreshToken, profile, done) {

    done(null,profile);
  }
));