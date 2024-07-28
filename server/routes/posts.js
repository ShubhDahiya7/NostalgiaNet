
// Routes - are just paths/urls, we are creating diff paths on which a client
// can make requests and get the res designed by us.
const express = require('express');

const { getPosts, getPost, createPost, updatePost, likePost, deletePost } = require('../controllers/posts.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

module.exports = router;