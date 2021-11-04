const express = require('express');
const sequelize = require('./config/connection');

const app = express()
// Select an appropriate port based on what heroku wants.
const PORT = process.env.PORT || 3001;


// Middleware for any incoming requests.
// Convert incoming request as json.
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


// turn on connection to db and server
sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});