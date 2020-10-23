const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

const products1 = [];

// /admin/add-product => GET
router.get('/signup', (req, res, next) => {
  res.render('signup', { pageTitle: 'Sign-Up',
   path: '/signup', 
   formsCSS: true, 
   productCSS: true, 
   activeAddProduct: true });
   console.log('Rendering /signup');
});

// /admin/add-product => POST
router.post('/signup', (req, res, next) => {
  var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
  products.push({
    uid:val,
    title: req.body.title ,
  address: req.body.address,
  city:req.body.city,
  state:req.body.state,
  pincode:req.body.pin,
  mobile: req.body.mobile,
  Total :req.body.tseats,
  Booked : req.body.bseats,
  Available:req.body.aseats,
  }); 
  res.render('home', {
    prods: products,
    prods1:products1,
    pageTitle: 'Home',
    path: '/',
    border: true,
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    redir:true,
  });
  //res.redirect('/');
});
router.get('/tsignup', (req, res, next) => {
  res.render('tsignup', { pageTitle: 'Testing Sign-Up',
   path: '/tsignup', 
   formsCSS: true, 
   productCSS: true, 
   activeAddProduct1: true });
   console.log('Rendering Tsignup');
});

// /admin/add-product => POST
router.post('/tsignup', (req, res, next) => {
  var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
  products1.push({
    uid:val,
    title: req.body.title ,
  address: req.body.address,
  city:req.body.city,
  state:req.body.state,
  pincode:req.body.pin,
  mobile: req.body.mobile,
  Total :req.body.tseats,
  }); 
  res.render('home', {
    prods1: products1,
    prods:products,
    pageTitle: 'Home',
    path: '/',
    border: true,
    hasProducts: products1.length > 0,
    border:true,
    activeShop: true,
    productCSS: true,
    redir1:true,
  });
  //res.redirect('/');
});

exports.routes = router;
exports.products = products;
exports.products1 = products1;