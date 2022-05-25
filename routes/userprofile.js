const express = require("express");
const router = express.Router();

const UserController = require('../controllers/User')

router
    .route("/")
    .get((req, res) => res.render('userprofile.ejs'))
    .post((req, res) => res.render('userprofile.ejs'));

router.post('/createUser', UserController.create);
/*router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);*/
router.get('/:id', UserController.findOne);
router.post('/login', UserController.login);

module.exports = router;
