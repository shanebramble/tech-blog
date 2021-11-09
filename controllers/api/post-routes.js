const router = require('express').Router();
const {
    Post,
    User
} = require('../../models');

// Create a user post.
router.post('/:id', (req, res) => {
    Post.create({
            title: req.body.title,
            post_body: req.body.post_body,
            user_id: req.params.id
        })
        .then(newPost => res.json(newPost))
        .catch(err => {
            res.status(500).json(err);
        });
});

// Get all posts created from database.
router.get('/', (req, res) => {
    Post.findAll()
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json.err
        }); 
});

module.exports = router;