const { getUser, postUser, putUser} = require("../controllers/user");
const express = require("express");

const router = express. Router();

router.get("/",getUser);
router.get("/",postUser);
router.get("/",putUser);

module.exports = router;