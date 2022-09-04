require('dotenv').config()
const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Fyziik:<password>@cluster0.n60inow.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})