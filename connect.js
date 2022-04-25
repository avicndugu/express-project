// Database intergration
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://express-project-avic:<accessdenied2022>@express-project.nwt9f.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  // perform actions on the collection object
  console.log(collection)
  client.close();
})