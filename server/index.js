// import the node modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const postRoutes = require('./routes/posts');

const app = express();
dotenv.config();

// this means every route in postRoutes is gonna start with /posts
// we added /posts as a prefix to url.
// const CONNECTION_URL = 'mongodb+srv://pespro2727:shubham12@cluster0.wo0w1a5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://pespro2727:shubham12@cluster0.wo0w1a5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);