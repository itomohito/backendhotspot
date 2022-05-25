const TopsModel = require('../model/tops')
// Create and Save a new top post
exports.create = async (req, res) => {
    if (!req.body.category && !req.body.title && !req.body.description) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const tops = new TopsModel({
        id: req.id,
        category: req.body.category,
        title: req.body.title,
        description: req.body.description
    });

    await tops.save().then(() => {
        res.redirect("/tops")
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating tops"
        });
    });
};

// Delete an admin with the specified id in the request
exports.destroy = async (req, res) => {
    await TopsModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Tops not found.`
            });
        } else {
            res.send({
                message: "top's deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};