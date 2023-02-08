const Project = require("./../models/projectModel");

exports.showProject = async (req, res) => {
  try {
    const project = await Project.find();
    res.status(200).json({
      status: "success",
      length: project.length,
      data: {
        project,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        project,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
