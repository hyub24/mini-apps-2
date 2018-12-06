const express = require('express');
const path = require('path');
const axios = require('axios');
const redis = require('redis');

const client = redis.createClient();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/crypto/history/:start/:end', (req, res) => {
  const start = req.params.start;
  const end = req.params.end;
  client.get(`${start}${end}`, (err, reply) => {
    if(err || !reply) {
      if(start === '0') {
        axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
          .then(response => {
            client.setex(`${start}${end}`, 3600, JSON.stringify(response.data));
            res.send(response.data);
          })
          .catch(error => res.status(500).send(error));
      } else {
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
          .then(response => {
            client.setex(`${start}${end}`, 3600, JSON.stringify(response.data));
            res.send(response.data);
          })
          .catch(error => res.status(500).send(error));
      }
    } else {
      res.send(reply);
    }
  })


});

app.listen(3000, () => console.log('listening on port 3000'));

