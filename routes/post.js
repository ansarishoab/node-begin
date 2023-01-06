const express = require("express");
const postContoller = require("../controllers/post");

const router = express.Router();

router.get("/", postContoller.getPosts);
router.post("/post", postContoller.createPost);

module.exports = router;
