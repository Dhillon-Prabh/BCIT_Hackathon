const express = require('express');
const bodyParser = require('body-parser');
const alasql = require('alasql'); //import for alasql
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/productivity', (req, res) => {
  var result = "";
  alasql.promise('SELECT SHIFT_DATE, PRODUCTIVITY FROM XLSX("data/PRODUCTIVITY-_1_.xlsx")')
      .then(function(resp){
          //  console.log(res); // output depends on mydata.xls
        res.status(200).json(resp);
      }).catch(function(err){
           console.log('Does the file exists? there was an error:', err);
      });
  // console.log(result);
  // res.send({ express: 'Hello From Express' });
});

app.get('/hauling', (req, res) => {
  var result = "";
  alasql.promise('SELECT e.EQUIPMENT_TYPE_ID As Equip, AVG(c.HAULING_TIME) As Haul FROM XLSX("data/EQUIPMENT.xlsx") e JOIN XLSX("data/Cycle.xlsx") c ON e.EQUIPMENT_ID = c.TRUCK_ID'
                    + ' GROUP BY e.EQUIPMENT_TYPE_ID ORDER BY e.EQUIPMENT_TYPE_ID ASC')
      .then(function(resp){
        // console.log(resp); // output depends on mydata.xls
        res.status(200).json(resp);
      }).catch(function(err){
           console.log('Does the file exists? there was an error:', err);
      });
  // console.log(result);
  // res.send({ express: 'Hello From Express' });
});

app.get('/empting', (req, res) => {
  var result = "";
  alasql.promise('SELECT e.EQUIPMENT_TYPE_ID As Equip, AVG(c.EMPTY_TIME) As Emp FROM XLSX("data/EQUIPMENT.xlsx") e JOIN XLSX("data/Cycle.xlsx") c ON e.EQUIPMENT_ID = c.TRUCK_ID'
                    + ' GROUP BY e.EQUIPMENT_TYPE_ID ORDER BY e.EQUIPMENT_TYPE_ID ASC')
      .then(function(resp){
        console.log(resp); // output depends on mydata.xls
        res.status(200).json(resp);
      }).catch(function(err){
           console.log('Does the file exists? there was an error:', err);
      });
  // console.log(result);
  // res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));