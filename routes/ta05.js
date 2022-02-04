//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/ta05', {
    title: 'Team Activity 05',
    path: '/ta05', // For pug, EJS
    style: req.session.style,
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS
  });
});

router.get('/change-style', (req, res, next) => {
  res.render('pages/change-style', {
    title: 'Change Style',
    path: '/ta05/change-style',
    style: req.session.style,
  });
});

router.post('/change-style', (req, res, next) => {
  req.session.style = req.body.style;
  res.redirect('/ta05');
});

router.get('/counter', (req, res, next) => {
  res.render('pages/counter', {
    title: 'Counter',
    path: '/ta05/change-style',
    style: req.session.style,
    counter: req.session.counter
  });
});

router.post('/counter-increment', (req, res, next) => {
  let counter = req.session.counter;
  req.session.counter = ++counter;
  res.redirect('/ta05/counter');
});

router.post('/counter-decrement', (req, res, next) => {
  let counter = req.session.counter;
  req.session.counter = --counter;
  res.redirect('/ta05/counter');
});

router.get('/reset', (req, res, next) => {
  req.session.destroy();
  res.redirect('/ta05');
})

module.exports = router;
