const { Medahinalem } = require("../models");
const asyncHandler = require("express-async-handler");

// Function to register a new project
const registerProject = asyncHandler(async (req, res) => {
  // Extract project data from request body
  const { projectName, desc, startDate, endDate, status, manager } = req.body;

  try {
    // Check if all required fields are present
    if (!projectName || !desc || !startDate || !endDate || !status || !manager) {
      throw new Error("Please add all fields");
    }

    // Check if a project with the same start date already exists
    const existingProject = await Medahinalem.findOne({ where: { startDate } });
    if (existingProject) {
      throw new Error("Duplicate project");
    }

    // Create new project
    const project = await Medahinalem.create({
      projectName,
      desc,
      startDate,
      endDate,
      status,
      manager,
    });

    // Send response with created project data
    res.status(201).json({
      id: project.id,
      projectName: project.projectName,
      desc: project.desc,
      startDate: project.startDate,
      endDate: project.endDate,
      status: project.status,
      manager: project.manager,
    });
  } catch (error) {
    // Handle errors and send error response
    res.status(400).json({
      error: error.message,
      message: "Project registration failed",
    });
  }
});
const getAllProjects = asyncHandler(async (req, res) => {
  // Find all projects in the database
  const projects = await Medahinalem.findAll();

  // Send response with all projects data
  res.status(200).json({
    project: projects,
  });
});

module.exports = { registerProject, getAllProjects};
