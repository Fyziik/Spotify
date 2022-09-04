require('dotenv').config()
const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
  const collection = client.db("spotify").collection("songs");
  // perform actions on the collection object
  await collection.find({}).toArray().then(data => {
    console.log(data)
  })
  client.close();
});




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})