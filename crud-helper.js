//connect to DB
require('dotenv').config();
require('./config/database');

const Bag = require('./models/bag')

let user, bag
let users, bags 