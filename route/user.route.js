module.exports = app => {
    const user = require('../controller/user.controller.js');
    var router = require('express').Router();

    router.get('/', user.findAll);
    router.get('/:id', user.findById);

    app.use('/api/users', router);
}