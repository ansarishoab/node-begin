const express = require("express");
const postContoller = require("../controllers/post");
const validator = require('../validator/utils')

const router = express.Router();

router.get("/", postContoller.getPosts);
router.post("/post", validator.createPostValidator, postContoller.createPost);

module.exports = router;
