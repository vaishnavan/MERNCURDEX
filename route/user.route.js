const router = require("express").Router();
const {createUserPost, getUserPost} = require("../controller/userpost.controller");

router.post("/createpost", createUserPost);
router.get("/getpost", getUserPost);

module.exports = router;

