const express = require('express');
const logger = require('morgan');
const app = express();

const connectToMongoDB = require('./database/connectToMongoDB')

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger('dev'));

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
    connectToMongoDB();
})