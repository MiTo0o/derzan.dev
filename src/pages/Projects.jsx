// import libraries
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import styling

//import components
import TopNav from "../components/TopNav";
import ProjectList from "../components/ProjectList";

function Projects() {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TopNav />
      <ProjectList />
    </ThemeProvider>
  )
}

export default Projects;
