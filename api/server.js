const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

let app = express();

// loads .env file into process.env
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function () {
    console.log('Connected to MongoDB');
});


// MIDDLEWARES
app.use(express.json());
app.use(cors());

// helps in securing express applications. 
// It sets up various HTTP headers to prevent attacks like Cross-Site-Scripting(XSS), clickjacking, etc.
app.use(helmet());
//  allows to log HTTP requests and responses in various formats and options
app.use(morgan("common"));

app.use("/api/users", userRoute); 
app.use("/api/auth", authRoute); 
app.use("/api/posts", postRoute); 



app.listen(8800,()=>{
    console.log("Server listening at http://localhost:8800")
})