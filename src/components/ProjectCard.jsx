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

// always import images as components, I struggled for a long time beacuse of this
import derzanDevMockUp from "./mockuper.png";


// according to https://github.com/webpack/webpack/issues/6680
// you cannot do something like:

// const path = './image';
// require(path);

// but you can:

// const path = 'image';
// require('./' + path);

// i cri ;(

function isMuiBuiltIn(link) {
  return (link.includes('@mui'));
}

function ProjectCard({ projectData }) {
  return(
    <Card
      variant="outlined"
      style={{
        backgroundColor: "#0E0D0D",
        maxWidth: 600,
      }}
    >
      <CardMedia
        style={{
          height: "100%",
        }}
        component="img"
        // REMEBER TO CHANGE ./ to whatever your path is and change 
        image={require('./' + projectData.imgUrl.slice(2))}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {projectData.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" sx={{ mb: 1 }}>
          {projectData.description}
        </Typography>
        {projectData.technologies.map((technology) => (
          <Button
            size="small"
            color="primary"
            endIcon={require(technology.iconLink).default}
            target="_blank"
            href={technology.url}
          >
            {technology.name}
          </Button>
        ))}
      </CardContent>
      <CardActions>
        {projectData.actions.map((action) => (
          <Button
            variant="outlined"
            size="small"
            color="primary"
            endIcon={require(action.iconLink).default}
            target="_blank"
            href={action.url}
          >
            {action.name}
          </Button>
        ))};

      </CardActions>
    </Card>
  )
}
export default ProjectCard;