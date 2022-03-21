// --- Imports --- //
import React from "react";

// --- Material Ui Imports --- //
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// always import images as components, I struggled for a long time beacuse of this
import ProjectCard from "./ProjectCard";
import data from "../../assets/projects";

function ProjectList() {
  return (
    <>
      <Typography
        variant="h3"
        paragraph
        style={{ textAlign: "center" }}
        sx={{ my: 4 }}
      >
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data.map((project) => (
          <ProjectCard projectData={project} />
        ))}
      </Grid>
    </>
  );
}

export default ProjectList;
