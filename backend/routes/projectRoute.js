const Project = require("./../controllers/projectController");
const express = require("express");

//making route using express.router
const router = express.Router();

router.route("/").get(Project.showProject).post(Project.createProject);

module.exports = router;
