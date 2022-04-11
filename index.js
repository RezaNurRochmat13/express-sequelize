const express = require('express');
const cors = require('cors');
const app = express();
const userController = require('./controller/user.controller.js');
const corsOptions = {
    origin: "*"
};
const PORT = 8080;

// ORM sequelize init
const db = require('./models');
db.sequelize.sync({ force: false }).then(() => {
    console.log("Sync db.");
});

// CORS configuration
app.use(cors(corsOptions));

// Parse requests body payload as json
app.use(express.json());

// Parse request body payload as form data
app.use(express.urlencoded({ extended: true }));

// Routing
app.get('/', (request, response) => {
    response.json({ message: "Welcome on Express Sequelize Example" });
});

// User routes
app.post('/api/users', userController.create);
app.get('/api/users', userController.findAll);
app.get('/api/users/:id', userController.findById);
app.put('/api/users/:id', userController.update);

// Set listen port
app.listen(PORT, () => {
    console.info(`Server running on port localhost:${PORT}`);
});