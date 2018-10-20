var express = require('express');

var admin = require("firebase-admin");

var serviceAccount = require("./spaceapps-717b2-firebase-adminsdk-awch5-bd19764c3a");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://spaceapps-717b2.firebaseio.com"
});

const db = admin.database();

db.ref("debug").push("test")

var app = express();

app.use(express.static(__dirname + '/felix/dist'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
