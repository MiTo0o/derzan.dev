// import Box from '@mui/material/Box';
import * as React from "react";
import titleLogo from "../title.svg";
import Grid from "@mui/material/Grid";
import Typed from 'react-typed';
import { fontSize } from "@mui/system";

function Title() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "86.5vh" }}
    >
      <Grid item xs={3}>
        <img
          src={titleLogo}
          className="App-logo"
          alt="logo"
          width="100%"
          height="auto"
        />
      </Grid>
      <Typed
        loop
        style={{fontSize: 30}}
        typeSpeed={50}
        backSpeed={35}
        strings={[
          "I am a Back End Developer",
          "I am a Front End Developer",
          "I am a Full Stack Developer"
        ]}
        smartBackspace
        shuffle={false}
        backDelay={1000}
        fadeOut={false}
        fadeOutDelay={100}
      />
    </Grid>
  );
}
export default Title;
