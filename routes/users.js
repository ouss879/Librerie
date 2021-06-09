var express = require("express");
var router = express.Router();

const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const passport = require("passport");
const Order = require ('../models/Order') ;


const csrf = require('csurf') ;

router.use(csrf()) ;

/* GET users listing. */
router.get("/signup",isNotSignin, function (req, res, next) {
  var massagesError = req.flash("signupError");
  res.render("user/signup", { massages: massagesError , token : req.csrfToken() });
});
router.post('/signup' ,  [
  check("first_name").not().isEmpty().withMessage("Entrez votre prénom"),
  check("last_name").not().isEmpty().withMessage("Entrez votre nom"),
  check("email").not().isEmpty().withMessage("Entrez votre email"),
  check("email").isEmail().withMessage("Entrez une adresse email valide"),
  check("password").not().isEmpty().withMessage("Entrez votre mot de passe"),
  check("password").isLength({ min: 5 }) .withMessage("Mot de passe d plus de 5 caractères"),
  check("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error(
        "le mot de passe et le mot de passe de confirmation ne correspondent pas"
      );
    }
    return true;
  }),
], (req , res ,next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   

   var validationMassages = [] ;
   for(var i=0 ; i<errors.errors.length ; i++){
     validationMassages.push(errors.errors[i].msg)
   }

   req.flash('signupError' , validationMassages) ;
   res.redirect('signup')

    return;
  }
  next() ;
} , passport.authenticate('local-signup', {
    session : false ,
    successRedirect : 'signin' ,
    failureRedirect : 'signup' ,
    failureMessage : true
}))


router.get('/profile' , isSignin ,(req , res ,next)=>{
  if(req.user.cart){
    totalProducts = req.user.cart.totalquantity
  }else{
    totalProducts = 0
  } 

  Order.find({user : req.user._id} , (err , resualt)=>{
    if(err){
      console.log(err)
    }
    console.log(resualt) ;
    var massagesError = req.flash('profileError') ;
    var messageImage = req.flash('profileImageError')
    var hasMassagesError =  false ;
    if(massagesError.length > 0){
      hasMassagesError =  true ;
    }
    const userCart = req.user.cart; 

    res.render('user/profile', {checkuser : true ,
       checkProfile : true ,
       totalProducts : totalProducts ,
       userOrder : resualt ,
       token : req.csrfToken() ,
       massages : massagesError ,
       hasMassagesError : hasMassagesError ,
       user : req.user ,
       userCart : userCart,
       messageImage : messageImage ,
      
      })
  }) 
  
})
router.get('/profi' , isSignin ,(req , res ,next)=>{
  if(req.user.cart){
    totalProducts = req.user.cart.totalquantity
  }else{
    totalProducts = 0
  } 

  Order.find({user : req.user._id} , (err , resualt)=>{
    if(err){
      console.log(err)
    }
    console.log(resualt) ;
    var massagesError = req.flash('profileError') ;
    var messageImage = req.flash('profileImageError')
    var hasMassagesError =  false ;
    if(massagesError.length > 0){
      hasMassagesError =  true ;
    }
    const userCart = req.user.cart; 

    res.render('user/profi', {checkuser : true ,
       checkProfile : true ,
       totalProducts : totalProducts ,
       userOrder : resualt ,
       token : req.csrfToken() ,
       massages : massagesError ,
       hasMassagesError : hasMassagesError ,
       user : req.user ,
       userCart : userCart,
       messageImage : messageImage ,
      
      })
  }) 
  
})

router.get("/signin",isNotSignin, (req, res, next) => {
  var massagesError = req.flash("signinError");
  res.render("user/signin", { massages: massagesError , token : req.csrfToken()});
});

router.post( "/signin", isNotSignin, [
    check("email").not().isEmpty().withMessage("please enter your email"),
    check("email").isEmail().withMessage("please enter valid email"),
    check("password").not().isEmpty().withMessage("please enter your password"),
    check("password").isLength({ min: 5 }).withMessage("please enter pssword more than 5 char"),
    check("confirm_password").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error(
          "le mot de passe et le mot de passe de confirmation ne correspondent pas"
        );
      }
      return true;
    }),
  ],(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      var validationMassages = [];
      for (var i = 0; i < errors.errors.length; i++) {
        validationMassages.push(errors.errors[i].msg);
      }

      req.flash("signinError", validationMassages);
      res.redirect("signin");

      return;
    }

    next();
  },
  passport.authenticate("local-signin", {
    
    successRedirect: "profile",
    failureRedirect: "signin",
    failureFlash: true,
  })
);
router.get('/logout' , isSignin ,  (req , res ,next)=>{
  req.logOut() ;
  res.redirect('/') 
  
})

function isSignin(req , res ,  next){
  if(! req.isAuthenticated()){
    res.redirect('signin')
    return ;
  }
  next();
}

function isNotSignin (req , res ,next){
  if(req.isAuthenticated()){
    res.redirect('/')
    return ;
  }

  next();

}


router.post('/updateuser' ,  [
  check('lastName').not().isEmpty().withMessage('please enter your lastName'),
  check('firstName').not().isEmpty().withMessage('please enter your firstName'),
  check('email').isEmail().withMessage('please enter valid email'),
  check('contact').not().isEmpty().withMessage('please enter your contact'),
  check('address').not().isEmpty().withMessage('please enter your adress'),
 

] ,  (req , res , next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   

   var validationMassages = [] ;
   for(var i=0 ; i<errors.errors.length ; i++){
     validationMassages.push(errors.errors[i].msg)
   }

   req.flash('profileError' , validationMassages) ;
   console.log(validationMassages)
   res.redirect('profi')

    return;
  }else{
    console.log('user updated')
    //res.redirect('/profile')
    const updatedUser = {
      lastName : req.body.lastName ,
      firstName : req.body.firstName ,
      email : req.body.email ,
      contact : req.body.contact ,
      address : req.body.address ,
    }
    console.log(updatedUser)

    User.updateOne({_id : req.user._id} , {$set : updatedUser} , (err , doc)=>{
      if(err){
        console.log(err)
      }else{
        console.log(doc);
        res.redirect('profi')
      }
    })
  }
})


module.exports = router;
