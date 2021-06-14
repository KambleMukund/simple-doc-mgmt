const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: function (req, file, cb) {
    console.log('req.body', req.body);
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 200, //size limit of 200MB
  },
});

const server = jsonServer.create();

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
server.use('/static', express.static(path.join(__dirname, 'public')));
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(upload.any());

server.use((req, res, next) => {
  if (req.path === '/fileupload') {
    upload.any();
    return res.json({
      id: 1,
    });
  } else {
    next();
  }
});

//server.use(jsonServer.rewriter(router));
server.use(router);

server.listen(9000, () => {
  console.log('JSON Server is running');
});
