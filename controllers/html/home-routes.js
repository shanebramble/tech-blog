const router = require ('express').Router()
const sequelize = require('../../config/connection');
const {User} = require ('../../models');

router.get('/', (req,res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/forgot', (req, res) => {
    res.render('forgot');
});
module.exports = router;


