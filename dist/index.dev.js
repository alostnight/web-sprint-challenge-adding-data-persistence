"use strict";

var server = require('./server.js');

var PORT = process.env.PORT || 6000;
server.get('/', function (req, res) {
  res.send("Server running at http://localhost:".concat(PORT));
});
server.listen(PORT, function () {
  console.log("Listening on port ".concat(PORT, "..."));
});