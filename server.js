var express = require("express");
var path = require("path");
var apiRoutes = require(path.join(
	__dirname,
	'app',
	'routing',
	'apiRoutes'
	));
var htmlRoutes = require(path.join(
	__dirname,
	'app',
	'routing',
	'htmlRoutes'
	));

var app = express();

// Set application port
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});