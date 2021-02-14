var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/";
/* GET home page. */
router.get('/', (request, response) => {
  response.json({HI:'Hello, Server!'});
});

router.post("/login", function (req, res) { 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    dbo.collection("tblUser").find(req.body.email).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      res.json(Object.assign({result,message:'success'}));
    });
  });
});

router.post("/register", function (req, res) { 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var myobj = { userName: req.body.userName , password: req.body.password };
    dbo.collection("tblUser").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
      res.json({HI:'Hello, Server!'});
    });
  });
});

module.exports = router;
