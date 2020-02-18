const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
require("./passport")(passport);

const config = require("./config/db");
const { PORT } = require("./config/variabelEnv");
const users = require("./routes/user");
const Port = PORT || 3000;
const app = express();

const account = require('./routes/account.route');

app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("hello to codeo");
});

app.use("/api/users", users);

app.use('/account', account);

if (!config) {
  console.log({
    error : error
  });
}else {
  console.log ("success connected to database")
}

app.listen(Port, () => {
  console.log(`Server is running on PORT ${Port}`);
});
