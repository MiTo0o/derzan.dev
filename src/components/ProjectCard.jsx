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
import Grid from "@mui/material/Grid";
// always import images as components, I struggled for a long time beacuse of this

// markups
import derzanDevMockUp from "./mockuper.png";

// custom icons
import MuiIcon from "./customMuiSvgIcons/MuiIcon/MuiIcon";
import ReactIcon from "./customMuiSvgIcons/ReactIcon/ReactIcon";

// mui built in icons
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArticleIcon from "@mui/icons-material/Article";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { BookOnlineOutlined } from "@mui/icons-material";

// according to https://github.com/webpack/webpack/issues/6680
// you cannot do something like:

// const path = './image';
// require(path);

// but you can:

// const path = 'image';
// require('./' + path);

// i cri ;(

// make sure to import everything including images
function returnCorrectIconOrImage(iconOrImageName) {
  switch (iconOrImageName) {
    // casses for images (png, jps, svg)
    case "derzanDevMockUp":
      return derzanDevMockUp;
    // casses for cutom icons
    case "MuiIcon":
      return <MuiIcon />;
    case "ReactIcon":
      return <ReactIcon />;
    // casses for mui built in icons
    case "GitHubIcon":
      return <GitHubIcon />;
    case "VisibilityIcon":
      return <VisibilityIcon />;

    default:
      return <CatchingPokemonIcon />;
  }
}

function ProjectCard({ projectData }) {
  {
    /* From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
  From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
  From 960px wide and above, I take up 25% of the device (4/12), so 3 columns fit the screen. */
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        variant="outlined"
        style={{
          maxWidth: 600,
          backgroundColor: "#0E0D0D",
        }}
      >
        <CardMedia
          style={{
            height: "100%",
          }}
          component="img"
          image={returnCorrectIconOrImage(projectData.imgName)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectData.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            sx={{ mb: 1 }}
          >
            {projectData.description}
          </Typography>
          {projectData.technologies.map((technology) => (
            <Button
              size="small"
              color="primary"
              endIcon={returnCorrectIconOrImage(technology.iconName)}
              target="_blank"
              href={technology.url}
            >
              {technology.name}
            </Button>
          ))}
        </CardContent>
        <CardActions>
          {projectData.technologies.map((action) => (
            <Button
              variant="outlined"
              size="small"
              color="primary"
              endIcon={returnCorrectIconOrImage(action.iconName)}
              target="_blank"
              href={action.url}
            >
              {action.name}
            </Button>
          ))}
        </CardActions>
      </Card>
    </Grid>
  );
}
export default ProjectCard;
