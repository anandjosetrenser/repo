const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
// mongoose.connect("mongodb://ninja:test@ds161148.mlab.com:61148/graphql-ninja");
// mongoose.connect(
//   "mongodb+srv://anandjose:Abc@123#@cluster0.g9ape.mongodb.net/sample_restaurants?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log(" Mongoose is connected")
// );

const mongoAtlasUri =
  "mongodb+srv://anandjose:Abc@123#@cluster0.g9ape.e=true&w=majority";

try {
  // Connect to the MongoDB cluster
  mongoose.connect(mongoAtlasUri);
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

// mongoose.connection.once("open", () => {
//   console.log("conneted to database");
// });

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
