const R = require('ramda');

var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.send("Hello World");
  });
  app.get("/add/:one/:two", function(req, res) {
    res.send({"add_result":R.add(req.params.one,req.params.two)});
  });
  app.get("/div/:one/:two", function(req, res) {
    if (parseInt(req.params.two)===0) {
      res.sendStatus(400);
    }else {
        res.send({"div_result":R.divide(req.params.one,req.params.two)});
    }
  });
}

module.exports = appRouter;
