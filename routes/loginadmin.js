const express = require("express");
const {create} = require("../controllers/Admin");

const router = express.Router();

router
    .route("/")
    .get((req, res) => res.render('loginadmin.ejs'))
    .post((req, res) => create(req,res));
module.exports = router;

