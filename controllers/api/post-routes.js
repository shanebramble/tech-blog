const router = require('express').Router();
const {
    Post,
    User
} = require('../../models');


router.post('/', (req, res) => {
    Post.create({
            title: req.body.title,
            post_body: req.body.post_body
        })
        .then(newPost => res.json(newPost))
        .catch(err => {
            res.status(500).json(err);
        })
});