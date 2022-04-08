const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('./route/user.route.js')(app);
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

// Set listen port
app.listen(PORT, () => {
    console.info(`Server running on port localhost:${PORT}`);
});