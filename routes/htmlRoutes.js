const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

router.get('/read', (req, res) => res.sendFile(path.join(__dirname, '../public/read.html')));

router.get('/post', (req, res) => res.sendFile(path.join(__dirname, '../public/post.html')));


module.exports = router