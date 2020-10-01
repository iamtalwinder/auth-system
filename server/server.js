const express = require("express");
const session = require("express-session");
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

app.use(
  session({
    name: "USER_SID",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, // 2 hours
      httpOnly: false,
    },
  })
);

app.use("/api/", routes);

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
