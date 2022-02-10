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

import ReactIcon from "../customMuiSvgIcons/ReactIcon/ReactIcon";
import MuiIcon from "../customMuiSvgIcons/MuiIcon/MuiIcon";

// always import images as components, I struggled for a long time beacuse of this
import derzanDevMockUp from "./mockuper.png";

function ProjectList() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" paragraph>
        Projects
      </Typography>
      <Box my={4}>
        <Card
          variant="outlined"
          style={{
            maxWidth: 345,
          }}
        >
          <CardMedia
            style={{
              height: "100%", // as an example I am modifying width and height
            }}
            component="img"
            // have to use require for private/local path (webpack)
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
      </Box>
    </Container>
  );
}

export default ProjectList;
