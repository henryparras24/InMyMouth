const express = require('express');
const path = require('path');
const apiRoutes = require ('./routes/apiRoutes.js')
const htmlRoutes = require ('./routes/htmlRoutes.js')

// Sets up the Express App
const app = express();
// const PORT = 3333;
const PORT = process.env.PORT || 3333;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Sets up basic HTML and API routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}!!!`));