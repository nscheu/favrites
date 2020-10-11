const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const dbname = "favs"

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI || "mongodb://localhost:27017/" + dbname;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
 }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB db connection established successfully");
});

// Require the api endpoints
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// Loads exercises Router when users go to oururl.com/exercises
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
