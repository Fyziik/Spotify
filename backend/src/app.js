require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/songs', cors(), async (req, res) => {
  client.connect(async err => {
    const songs_collection = client.db("spotify").collection("songs");
    await songs_collection.find({}).toArray().then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data, null, 3));
    })
    client.close();
  });
  
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})