const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ayush24:gL3LQGJOt0d0D0Xd@cluster0.zx923j7.mongodb.net/project"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    requred: true,
    unique: true,
  },
  password: {
    type: String,
    requred: true,
  },
});
const collection = mongoose.model("collection", newSchema);

module.exports = collection;
