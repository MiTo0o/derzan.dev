import React from "react";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Snowfall from "react-snowfall";
import Typed from "react-typed";
import CottageIcon from "@mui/icons-material/Cottage";
import IconButton from "@mui/material/IconButton";

function PageNotFound() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "86.5vh" }}
      >
        <Typography sx={{ fontSize: 150 }}>404</Typography>
        <Typed
          style={{ fontSize: 40 }}
          typeSpeed={50}
          strings={["It's getting cold, let's get you home."]}
          fadeOut={false}
          fadeOutDelay={100}
        />
        <br />
        <br />
        {/* sx={{ fontSize: 100 }} */}
        <IconButton href="/">
          <CottageIcon sx={{ fontSize: 100 }} />
        </IconButton>
        {/* <Typography sx={{ fontSize: 40 }}>
          It's getting cold, let's get you home.
        </Typography> */}
      </Grid>
      <Snowfall
        // Changes the snowflake color
        color="#607d8b"
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
        radius={[0.5, 3.0]}
        speed={[0.5, 3.0]}
        wind={[-0.5, 2.0]}
      />
    </ThemeProvider>
  );
}

export default PageNotFound;
