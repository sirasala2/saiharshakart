const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const async = require('async-waterfall');
const token = require('rand-token');
const uuid =require('uuid');
const multer= require('multer');
const ObjectId = require('mongodb').ObjectID;
const url = "mongodb://localhost:27017/";
/* GET home page. */

router.get('/', (request, response) => {
  response.json({ HI: 'Hello, Server!' });
});

router.post("/login", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    dbo.collection("tblUser").findOne({
      userName: req.body.userName
    }, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!result) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = req.body.password == result.password ? true : false;

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: result.id }, 'harsha', {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: result._id,
        username: result.userName,
        accessToken: token
      });
    });
  });
});

router.post("/register", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var myobj = { userName: req.body.userName, password: req.body.password };
    dbo.collection("tblUser").insertOne(myobj, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!result) {
        return res.status(404).send({ message: "User Not found." });
      }
      console.log("1 document inserted");
      db.close();
      res.status(200).send(result.ops);
    });
  });
});



router.post("/forgotpassword", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    dbo.collection("tblUser").findOne({
      userName: req.body.userName
    }, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '************@gmail.com',
          pass: '********'
        }
      });
      const tokenGenerated = token.generate(16);
      var mailOptions = {
        from: '*********@gmail.com',
        to: req.body.userName,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!' + tokenGenerated
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("kart");
            var myobj = { userName: req.body.userName, token: tokenGenerated, isActive: 1 }
            dbo.collection("tblForgotpassword").insertOne(myobj, function (err, result) {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              res.status(200).send(info);
            });

          });
        }
      });
    });
  });
});
router.post("/resetpassword", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var abc = { userName: req.body.userName, token: req.body.token, isActive: 1 };
    dbo.collection("tblForgotpassword").findOne(abc, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!result) {
        return res.status(404).send({ message: "User Not found or token expired" });
      }
      if (result) {
        var acd = { userName: req.body.userName, password: req.body.password };
        dbo.collection("tblUser").findOneAndUpdate({ userName: req.body.userName},{$set: {password: req.body.password }}, { upsert: true }, function (err, result1) {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          if (result1) {
            dbo.collection("tblForgotpassword").updateOne( { userName: req.body.userName}, {$set:{isActive: 0 }}, { upsert: true }, function (err, result2) {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              res.status(200).send(result2);
            })
          }
        });
      }
        })
    });
  });

  const DIR = './public/';

  const storage = multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, DIR);
      },
      filename: (req, file, cb) => {
          const fileName = file.originalname.toLowerCase().split(' ').join('-');
          cb(null,  + '-' + fileName)
      }
  });
  
  var upload = multer({
      storage: storage,
      fileFilter: (req, file, cb) => {
          if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
              cb(null, true);
          } else {
              cb(null, false);
              return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
          }
      }
  });
  
  // User model
  
  router.post('/user-profile', upload.any('profileImg'), (req, res, next) => {
  })

  router.post("/addAddress", function (req, res) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("kart");
      var myobj = { userid:req.body.userid,firstname:req.body.firstname,lastname:req.body.lastname ,phone:req.body.phone ,houseno:req.body.houseno,city:req.body.city,state:req.body.state,zipcode:req.body.zipcode };
      dbo.collection("tblAddress").insertOne(myobj, function (err, result) {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        console.log("1 document inserted");
        db.close();
        res.status(200).send(result.ops);
      });
    });
  });
  router.post("/getaddresses",function(req,res){
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("kart");
      var myobj = {userid:req.body.userid};
      dbo.collection("tblAddress").find(myobj).toArray(function(err, result) {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if(result){
          
         res.status(200).send(result); 
        return;
        }
      })
  })
});
router.post("/getaddressbyid", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var abc = {userid:req.body.userid, _id:new ObjectId(req.body._id)};
    dbo.collection("tblAddress").findOne(abc, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(result){
        
       res.status(200).send(result); 
      return;
      }
    })
})
});
router.post("/updateaddressbyid", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var myobj = {firstname:req.body.firstname,lastname:req.body.lastname ,phone:req.body.phone ,houseno:req.body.houseno,city:req.body.city,state:req.body.state,zipcode:req.body.zipcode };
    if(req.body.userid && req.body._id){
    dbo.collection("tblAddress").updateOne({ userid:req.body.userid, _id:new ObjectId(req.body._id)},{$set: myobj}, { upsert: true }, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(result){
        
       res.status(200).send(result); 
      return;
      }
    })
  }else{ res.status(500).send({ message: err });
  return;
}
})
});

router.post("/deleteaddressbyid", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var abc = { _id:new ObjectId(req.body._id)};
    dbo.collection("tblAddress").deleteOne(abc, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(result){
        
       res.status(200).send(result); 
      return;
      }
    })
})
});
router.post("/createstore", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var myobj = { userid:req.body.userid,storename:req.body.storename ,phone:req.body.phone ,houseno:req.body.houseno,city:req.body.city,state:req.body.state,zipcode:req.body.zipcode };
    dbo.collection("tblStores").insertOne(myobj, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      console.log("1 document inserted");
      db.close();
      res.status(200).send(result.ops);
    });
  });
});

router.post("/createproduct", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var myobj = { img:req.body.img,userid:req.body.userid,storeid:req.body.storeid,productname:req.body.productname ,price:req.body.price ,offerprice:req.body.offerprice,size:req.body.size };
    dbo.collection("tblProducts").insertOne(myobj, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      console.log("1 document inserted");
      db.close();
      res.status(200).send(result.ops);
    });
  });
});

router.post("/updateproduct", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var myobj = {  productname:req.body.productname ,price:req.body.price ,offerprice:req.body.offerprice,size:req.body.size,img:req.body.img };
    dbo.collection("tblProducts").updateOne({_id:new ObjectId(req.body._id),userid:req.body.userid,storeid:req.body.storeid},{$set:myobj},{ upsert: true }, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      console.log("1 document inserted");
      db.close();
      res.status(200).send(result.ops);
    });
  });
});

router.post("/deleteproductbyid", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var abc = { _id:new ObjectId(req.body._id)};
    dbo.collection("tblProducts").deleteOne(abc, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(result){
        
       res.status(200).send(result); 
      return;
      }
    })
})
});
router.post("/getproductsbystoreid",function(req,res){
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var myobj = {storeid:req.body.storeid};
    dbo.collection("tblProducts").find(myobj).toArray(function(err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(result){
       res.status(200).send(result); 
      return;
      }
    })
})
});

router.post("/getproductdetails", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("kart");
    var abc = { _id:new ObjectId(req.body._id)};
    dbo.collection("tblProducts").findOne(abc, function (err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(result){
        
       res.status(200).send(result); 
      return;
      }
    })
})
});
module.exports = router;
