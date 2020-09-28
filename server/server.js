const express = require("express");
const con = require("./config/db.js");
const routes = require("./routes/index");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
// connecting route to database
app.use((req, res, next) => {
  req.con = con;
  next();
});
app.use("/api/", routes);

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
