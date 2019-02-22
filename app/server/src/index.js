/**
 * @flow
 */

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import router from './routes'
import { errorHandler } from './middleware'

const app = new Koa()

// set up mysql connection
const mysql = require('mysql');
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'resumake',
    password: 'resumake1357',
    database: 'resumes'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

if (app.env === 'development') {
  app.proxy = true
}

app.use(errorHandler())
app.use(helmet())
app.use(bodyParser())
app.use(router)

export default app
