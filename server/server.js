const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('musicquiz');
  const musicFacts = db.collection('facts');
  const factsRouter = createRouter(musicFacts);
  app.use('/api/musicfacts', factsRouter);
})
.catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});