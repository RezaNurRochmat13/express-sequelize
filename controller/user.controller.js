const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    User.findAll().then(data => {
        res.json(data);
    })
};

exports.findById = (req, res) => {

};

exports.create = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};