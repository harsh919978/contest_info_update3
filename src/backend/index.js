const express = require("express");
const collection = require("./db");
const cors = require("cors");
// const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", (req, res) => {});

app.post("/", async (req, res) => {
  try {
    const user = await collection.findOne({ email: req.body.email });
    // console.log(user.password);
    if (req.body.password === user.password) {
      console.log("authorized");
      // res.redirect("/ss");
      res.json("exist");
    } else {
      console.log("Wrong password");
      res.json("notexist");
    }
  } catch (err) {
    console.log(err);
    console.log("User not registered");
    res.send("notexist");
  }
  // res.redirect(301, "/");
});
app.post("/register", async (req, res) => {
  // const email = collection.findOne({ email: req.body.email });
  // if (email) {
  //   console.log
  //   return res.status(404)
  // }

  // try {
  //

  //   console.log("Registration done");
  // } catch (err) {
  //   console.log("Email already registered");
  //   res.status(404);
  // }
  try {
    const check = await collection.findOne({ email: req.body.email });
    if (check) {
      res.json("exist");
      // console.log( )
    } else {
      res.json("notexist");
      const user = new collection(req.body);
      await user.save();
      console.log("Registered");
    }
  } catch (e) {
    res.json("notexist");
  }
  // res.redirect(301, "/register");
});

app.listen(8000, () => {
  console.log("app connected");
});
