const express = require('express');
const dotenv = require('dotenv');
const { healthRouter, testRouter } = require('./src/routes');

dotenv.config();
const app = express();

const port = process.env.PORT || 1500;

app.use('/health', healthRouter);
app.use('/test', testRouter);

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
