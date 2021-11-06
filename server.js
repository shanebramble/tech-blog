const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');


const app = express()
// Select an appropriate port based on what heroku wants.
const PORT = process.env.PORT || 3001;


// Setting up handlebars engine.
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// Middleware for any incoming requests.
// Convert incoming request as json.
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Make the public folder static to be used universally.
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log('Now listening 🌎'));
});