const Home = require('../models/Home');

exports.create = (req, res) => {
    if (!req.body.header) {
        res.status(400).send({ message: "Header can not be empty!" });
        return;
    }

    // Create a 
    const insertData = new Home({
        header: req.body.header,
        introduce: req.body.introduce,
        areas: req.body.areas,
        goal: req.body.goal,
        proficeincy: req.body.proficeincy,
        content: req.body.content,
    });

    // Save in the database
    insertData
        .save(insertData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating data."
            });
        });
};

// Retrieve all s from the database.
exports.findAll = (req, res) => {
    Home.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        });
};

// Find a single with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    console.log(id);

    Home.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving data with id=" + id });
        });
};

// Update a by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Home.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}. Maybe was not found!`
                });
            } else res.send({ message: "Updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating data with id=" + id
            });
        });
};

// Delete a with the specified id in the request
exports.deleteOne = (req, res) => {
    const id = req.params.id;

    Home.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete data with id=${id}. Maybe was not found!`
                });
            } else {
                res.send({
                    message: "Deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete data with id=" + id
            });
        });
};

// Delete all s from the database.
exports.deleteAll = (req, res) => {
    Home.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} s were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all s."
            });
        });
};