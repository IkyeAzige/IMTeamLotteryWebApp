var express = require('express');
var { MongoClient } = require('mongodb');

var router = express.Router();

const title = process.env.TITLE;

const tickeks = [
    {
        syndicate: 'Ofqual Lottery Syndicate',
        startdate: '19/09/2018',
        endDate: '19/09/2018',
        numberone: '20',
        numbertwo: '10',
        numberthree: '50',
        numberfour: '1',
        numberfive: '59',
        numbersix: '40',
        validfor:'Wednesday'
    },
    {
      syndicate: 'Ofqual Lottery Syndicate',
      startdate: '22/09/2018',
      endDate: '22/09/2018',
      numberone: '20',
      numbertwo: '30',
      numberthree: '40',
      numberfour: '50',
      numberfive: '35',
      numbersix: '20',
      validfor:'Saturday'
  },
  {
    syndicate: 'Ofqual Lottery Syndicate',
    startdate: '26/09/2018',
    endDate: '06/10/2018',
    numberone: '10',
    numbertwo: '20',
    numberthree: '30',
    numberfour: '40',
    numberfive: '50',
    numbersix: '59',
    validfor:'Both'
    }];
/* GET home page. */
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
                }
            }
            );

            const db = client.db(dbName);
            const response = await db.collection('tickeks').insertMany(tickeks);
            res.json(response);
        } catch (err) {
            res.send(err);
        }
    }())
});

module.exports = router;