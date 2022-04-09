const db = require('../models');
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

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};