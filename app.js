var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const ownerRouter = require("./app/owner/route");
// const adminRouter = require("./app/admin/route");
const userRouter = require("./app/user/route");
const bahanBakuRouter = require("./app/bahanBaku/route");
const produkRouter = require("./app/produk/route");
const transactionRouter = require("./app/transaksi/route");

const customErrorHandler = require("./middleware/customErrorHandler");
const handler404NotFound = require("./middleware/handler404NotFound");
var app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
// app.use('/owner', ownerRouter);
// app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/material', bahanBakuRouter);
app.use('/product', produkRouter);
app.use('/transaction', transactionRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler

app.use(customErrorHandler);
app.use(handler404NotFound);

module.exports = app;
