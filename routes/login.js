const express = require("express");
const {create} = require("../controllers/User");

const router = express.Router();

router
    .route("/")
    .get((req, res) => res.render('login.ejs'))
    .post((req, res) => create(req,res));
module.exports = router;

