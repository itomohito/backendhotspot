const express = require("express");
const TopsController = require("../controllers/Tops");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render('tops.ejs'))
    .post((req, res) => res.render('tops.ejs'));
module.exports = router;

router.post('/', TopsController.create);
router.delete('/:id', TopsController.destroy);