const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/Admin");

router
    .route("/")
    .get((req, res) => res.render('adminprofile.ejs'))
    .post((req, res) => res.render('adminprofile.ejs'));

router.post('/createAdmin', AdminController.create);
router.patch('/:id', AdminController.update);
router.delete('/:id', AdminController.destroy);
router.get('/:id', AdminController.findOne);
router.post('/loginn', AdminController.login);

module.exports = router;
