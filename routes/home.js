const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./signup');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  const products1 = adminData.products1;
  res.render('home', {
    prods: products,
    prods1:products1,
    pageTitle: 'Home',
    path: '/',
    border: true,
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});
router.get('/book',(req,res,next) =>{
  res.render('book',{
    pageTitle:'Book',
    path:'/book',
  });
 
});
router.post('/book',(req,res,next) =>{
  res.redirect('/');
 
});


module.exports = router;
