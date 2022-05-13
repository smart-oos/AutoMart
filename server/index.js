const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 
app.use(express.json());

// 
mongoose.connect('', {
    useNewUrlParser: true,
});

// 
app.listen(3000, () => {
    console.log("Server running on port 3000...")
 });

 


// // const { MongoClient, ServerApiVersion } = require('mongodb');
// // const uri = "mongodb+srv://smart-oos:<password>@cluster0.ta0dr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// // client.connect(err => {
// //   const collection = client.db("test").collection("devices");
//   perform actions on the collection object
// //   client.close();
// // });
// // 