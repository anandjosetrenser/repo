const express = require("express");
const app = express();
const PORT = 6969;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");
const _ = require("lodash");

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  var data = [
    {
      name: "jim",
      color: "blue",
      age: "22",
    },
    {
      name: "Sam",
      color: "blue",
      age: "33",
    },
    {
      name: "eddie",
      color: "green",
      age: "77",
    },
  ];

  console.log(
    _.chain(data)
      .groupBy("color")
      .map((value, key) => ({ color: key, users: value }))
      .value()
  );
  console.log("Server running");
});
