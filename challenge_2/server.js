const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/crypto/history/:start/:end', (req, res) => {
  if(req.params.start === 'default') {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => res.send(response.data))
      .catch(error => res.status(500).send(error));
  } else {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${req.params.start}&end=${req.params.end}`)
      .then(response => res.send(response.data))
      .catch(error => res.status(500).send(error));
  }

});

app.listen(3000, () => console.log('listening on port 3000'));

