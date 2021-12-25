require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT || 3000;

const app = express();

const start = async () => {
  try{
    await sequelize.authenticate(),
    await sequelize.sync()
  } catch(e) {
    console.log(e)
  }
}

start()

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))