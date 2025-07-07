const express = require('express');
const logger = require('morgan');
const app = express();

const connectToMongoDB = require('./database/connectToMongoDB')

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger('dev'));

// Router
const userRouter = require('./routes/user/userRouter');
app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
    connectToMongoDB();
})