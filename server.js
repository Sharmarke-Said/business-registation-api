const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = require("./app");
app.use(cors());

const DB = process.env.DATABASE_URI;

mongoose
  .connect(DB, {})
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
