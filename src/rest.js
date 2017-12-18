var express = require("express");
var request = require('request');
const R = require('ramda');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});

console.log('can do more');

const getQuote = function getQuote(equity) {
  console.log('getting quote for ',equity);
  const str = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${equity}`;
  request(str, function (error, response, body) {
  //  console.log('error:', error); // Print the error if one occurred
  //  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //  console.log('body:', body); // Print the HTML for the Google homepage.
    return body.LastPrice;
  });
}
const quote =["AMZN", "YHOO", "FB", "GOOGL","MSFT","AAPL"];
R.map(getQuote,quote);
//R.pipe(R.map(p=> getQuote(p)),R.reduce(=>))(quote);
