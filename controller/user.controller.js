const db = require('../models');
const user = require('../models/user.js');
const User = db.users;

exports.findAll = (req, res) => {
    User.findAll().then(data => {
        res.json(data);
    })
};

exports.findById = (req, res) => {
    User.findByPk(req.params.id)
        .then(data => {
            if (data) {
                res.json(data)
            } else {
                res.status(404).json({ message: `User not found with id : ${req.params.id}` })
            }
        })
};

exports.create = (req, res) => {
    if (req.body === null) {
        res.status(400).json({ message: "Body can't be null" });
    }

    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    };

    User.create(user).then(data => {
        res.json(data);
    });
};

exports.update = (req, res) => {
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    };

    User.findByPk(req.params.id)
        .then(data => {
            if (data) {
                User.update(user, {
                    where: { id: req.params.id }
                });
                res.status(200).json({ message: 'Updated successfully' });
            } else {
                res.status(404).json({ message: `User not found with id : ${req.params.id}` })
            }
        });
};

exports.delete = (req, res) => {

    User.findByPk(req.params.id)
        .then(data => {
            if (data) {
                User.destroy(data);

                res.status(200).json({ message: 'Updated successfully' });
            } else {
                res.status(404).json({ message: `User not found with id : ${req.params.id}` })
            }
        });
};