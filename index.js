const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet())

app.get('/', (req, res) => {
  return res.json({
    api: 'live',
  });
});

app.listen(5000);
