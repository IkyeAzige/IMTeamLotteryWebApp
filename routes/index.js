var express = require('express');
var router = express.Router();
var { MongoClient } = require('mongodb');

const title = process.env.TITLE;

router.get('/', function (req, res, next) {
  /*
  const url = process.env.URL;
  const password = process.env.PASSWORD;
  const user = process.env.USER;
  */
 const url = 'mongodb://@imteamlotterydb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';
 const password = 'AcQz1yLyYVkoFfUm3QDvmtgscsUKCtAUA6N1r3IcuC2HfDCFuHIieyRb4YYzgJiPMwjyevSYbY64MAYUSTaUGA==';
 const user = 'imteamlotterydb';
 const dbName = 'lottery';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url, {
        auth: {
          user,
          password
        },
        useNewUrlParser: true

      }
      );

      const db = client.db(dbName);
      const tickeks = await db.collection('tickeks').find().toArray();
      res.render('index', { tickeks });
     // res.json(books);

    } catch (err) {
      console.log(err);
    }
  }())
});


module.exports = router;
