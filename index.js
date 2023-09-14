const express = require("express");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth");
const user = require("./routes/user");

const { connect } = require("./db");

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoute);
app.use("/user", user);

app.listen(7000, async () => {
  console.log("Server running at 7000");
  await connect();
});
