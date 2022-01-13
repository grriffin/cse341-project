//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = [
  {
    name: 'Homer Simpson',
  },
  {
    name: 'Bart Simpson',
  },
  {
    name: 'Marge Simpson',
  },
];

let error = '';

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users,
    error: error,
  });
  error = '';
});

router.post('/addUser', (req, res, next) => {
  const name = req.body.name;
  const index = users.findIndex((n) => n.name === name);
  if (index >= 0) {
    error = 'User already exists!';
  } else {
    users.push({ name });
  }
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  const name = req.body.name;
  const index = users.findIndex((n) => n.name === name);
  if (index >= 0) {
    users.splice(index, 1);
  } else {
    error = 'User does not exist!';
  }
  res.redirect('/ta02');
});

module.exports = router;
