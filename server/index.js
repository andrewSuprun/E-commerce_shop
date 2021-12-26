require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello Viewer'})
})

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