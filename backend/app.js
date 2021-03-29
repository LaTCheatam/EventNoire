// backend/app.js

const routes = require('./routes');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const { contentSecurityPolicy } = require('helmet');
const isProduction = environment === 'production';

const app = express();
const { ValidationError } = require('sequelize');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());



// Security Middleware
if (!isProduction) {
    app.use(cors());  //enable cors only in developement;
}

app.use(helmet({        //helmet helps set a variety of header to better secure your app.
    contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            someSite: isProduction && "Lax",
            httpOnly: true,
        }
    })
)

app.use(routes);        // connect all the routes and need to come behind the others.

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, _res, next) => {
    if (err instanceof ValidationError) { //check if error is Sequelize error:
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';

    }
    next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;