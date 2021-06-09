const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const Cart = require('../models/Cart') ;


passport.serializeUser((user, done) => {
  return done(null, user.id);
});
passport.deserializeUser((id , done)=>{
  User.findById(id ,('email firstName lastName contact address ') ,(err ,user)=>{
      Cart.findById(id , (err , cart)=>{
          if(!cart){
              return done(err , user)
          }
          user.cart = cart ;
          return done (err , user) ;
      })
  })
})


passport.use(
  "local-signin",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(
            null,
            false,
            req.flash("signinError", "L'e-mail et/ou le mot de passe sont incorrects")
          );
        }
        if (!user.comparePassword(password)) {
          return done(null, false, req.flash("signinError", "L'e-mail et/ou le mot de passe sont incorrects"));
        }

        return done(null, user);
      });
    }
  )
);

passport.use('local-signup' , new localStrategy ({
    usernameField : 'email' ,
    passwordField : 'password' ,
    passReqToCallback : true
} , ( req , email , password , done)=>{
    User.findOne({email : email} , (err , user)=>{
        if(err){
            return done(err)
        }
        if(user){
            return done(null , false , req.flash('signupError' , 'Email exist déja'))
        }
        const newUser = new User({
            email : email ,
            password : new User().hashPassword(password) ,
        })

        newUser.save((err , user)=>{
           if(err){
               return done(err)
           }
           return done(null , user) ;
        })
    })
}))
