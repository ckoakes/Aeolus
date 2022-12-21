// entry point for applicaiton when using node
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router.js'); // loads in router.js

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();

// middleware functions
// process JSON
app.use(express.json());
/* CORS (Cross-Origin Resource Sharing)
is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.
*/
app.use(cors());

/* morgan 
logs HTTP requests and errors */
app.use(morgan('tiny'));

app.use(router); // enables putting route definitions in another file

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('starting on port 8080');
  app.listen(8080);
});
