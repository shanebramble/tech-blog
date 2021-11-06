const router = require('express').Router();
const {User} = require('../../models');


// Get all users in the database.
router.get ('/', (req, res) => {
    User.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get a single user from the database.
router.get ('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then (dbUserData => {
        if (!dbUserData) {
            res.status(404).json({
                message: 'No user found with this is'
            });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create a new user in database.
router.post('/', (req, res)=> {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then((postData) => {
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;