//========================//
//==REQUIRE DEPENDENCIES==//
//========================//
const express = require('express');
const router = require('express-promise-router')();

const userController = require('../../controllers/users');

//Authentication routing
router.route('/signup')
    .post(userController.signUp);

router.route('/signin')
    .post(userController.signIn);

router.route('/secret')
    .get(userController.secret);
   
 router.route('/search')
    .get(userController.search);

//Non-authentication user routing
router.route('/profileUpdate')
    .put(userController.profileUpdate);

//=================//
//==EXPORT MODULE==//
//=================//
module.exports = router;


