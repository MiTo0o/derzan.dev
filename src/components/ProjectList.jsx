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

import ReactIcon from "./ReactIcon";

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
          style={{
            maxWidth: 700,
          }}
        >
          <CardMedia
            style={{
              height: 150,
            }}
            image="https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              derzan.dev
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This website took a decent amount of work to make. My first medium
              sized react project.This website took a decent amount of work to
              make. My first medium sized react project.
            </Typography>
            <Button size="small" color="primary" endIcon={<ReactIcon />}>
              React
            </Button>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              endIcon={<GitHubIcon />}
              target="_blank"
              href="http://www.google.com/"
            >
              Source
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              target="_blank"
              endIcon={<VisibilityIcon />}
            >
              Demo
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}

export default ProjectList;
