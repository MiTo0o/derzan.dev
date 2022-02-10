// --- Imports --- //
import React from "react";

// --- Material Ui Imports --- //
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Grid from "@mui/material/Grid";
import ReactIcon from "../customMuiSvgIcons/ReactIcon/ReactIcon";
import MuiIcon from "../customMuiSvgIcons/MuiIcon/MuiIcon";

// always import images as components, I struggled for a long time beacuse of this
import derzanDevMockUp from "./mockuper.png";

function BigCard() {
  return(
    <Card
    variant="outlined"
    style={{
      maxWidth: 600,
    }}
  >
    <CardMedia
      style={{
        height: "100%",
      }}
      component="img"
      image={derzanDevMockUp}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        derzan.dev
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        My personal website built mainly using ReactJS and material UI.
        The website was built with the material design pattern and
        responsiveness in mind.
      </Typography>
      <Button
        size="small"
        color="primary"
        endIcon={<ReactIcon />}
        target="_blank"
        href="https://reactjs.org/"
      >
        ReactJS
      </Button>
      <Button
        size="small"
        color="primary"
        endIcon={<MuiIcon />}
        target="_blank"
        href="https://mui.com/"
      >
        MUI
      </Button>
    </CardContent>
    <CardActions>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        endIcon={<GitHubIcon />}
        target="_blank"
        href="https://github.com/MiTo0o/MiTo0o.github.io"
      >
        Source
      </Button>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        target="_blank"
        endIcon={<VisibilityIcon />}
        target="_blank"
        href="https://derzan.dev/"
      >
        Live
      </Button>
    </CardActions>
  </Card>
  )
}

function ProjectList() {
  return (
    <>
      <Typography variant="h3" paragraph style={{textAlign: "center"}}>
        Projects
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
      >
        {/* From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        From 960px wide and above, I take up 25% of the device (4/12), so 3 columns fit the screen. */}
        <Grid item xs={12} sm={6} md={4}>
          <BigCard/>
        </Grid>       
      </Grid>
    </>

  );
}

export default ProjectList;
