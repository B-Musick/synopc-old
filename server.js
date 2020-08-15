let express     = require('express'),
    server      = express(),
    dotenv      = require('dotenv'),
    bodyParser  = require('body-parser')
    mongoose = require('mongoose'); // Used for connecting to database, schema
    

// ROUTE INTEGRATION - Make sure under Passport otherwise 
// https://github.com/jaredhanson/passport/issues/619 
let indexRoutes = require('./routes/index');
let bookRoutes  = require('./routes/books');

// Middleware to help process requests, it can go in POST request and retrieve data
// USE BODY PARSER TO GET FORM BODY
server.use(bodyParser.urlencoded({
    extended: true
}));

// SET VIEW ENGINE SO DONT HAVE TO TYPE .ejs WHEN RENDER
server.set('view engine', 'ejs');

// Set up the .env file to access through process.env.VALUE
dotenv.config();

// PREVENTS ANY BACKLASH FROM DIRECTORY CHANGES
// ACCESS STYLESHEETS AND SCRIPTS WITH href="/stylesheets" or src='/scripts'
server.use(express.static("./public"));

// CONNECT THE DATABASE RUNNING ON DEFAULT PORT 27017
mongoose.connect(process.env.DB), { useNewUrlParser: true, useFindAndModify: false };

server.use("/",indexRoutes);
server.use("/books",bookRoutes);

// START THE SERVER
const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log(`Sever is running on PORT ${PORT}`)
});

module.exports = server;

