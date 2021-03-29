const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const { healthRouter, cmsRouter } = require('./src/routes');

if (process.env.NODE_APP_ENV === 'local') {
  dotenv.config({
    path: path.resolve(__dirname, `.${process.env.NODE_APP_ENV}.env`),
  });
} else dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());
app.use('/health', healthRouter);
app.use('/cms', cmsRouter);

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
