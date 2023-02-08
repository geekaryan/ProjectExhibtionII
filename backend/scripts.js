const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Project = require("./models/projectModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database is connected"));

//reading the json file..

const file = JSON.parse(fs.readFileSync("./jsondata.json", "utf-8"));

//importing the data...

const importData = async () => {
  try {
    await Project.create(file);
    console.log("data added successfully");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//deleting the data..

const deleteData = async () => {
  try {
    await Project.deleteMany();
    console.log("data is deleted succesfully..");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// console.log(process.argv);

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

// ==> command to delete the database first..
// ==> node scripts.js --delete

// ==> command to import the data to database second..
// ==> node scripts.js --import
