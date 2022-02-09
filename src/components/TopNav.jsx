import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import sideLogo from "../sideLogo.svg";
import centerLogo from "../centerLogo.svg";
import { Link } from "react-router-dom";
import resumePDF from "./Derzan-Chiang-Resume2022.pdf";

const pagesAndRoutes = [
  {
    page: "Home",
    route: "/",
  },
  {
    page: "Projects",
    route: "/projects",
  },
];

const TopNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="100%">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pagesAndRoutes.map((page) => (
                <Link
                  to={page.route}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flex: 1, mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={sideLogo} className="App-logo" alt="logo" />
          </Typography>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            {pagesAndRoutes.map((page) => (
              <Link
                to={page.route}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  key={page.page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.page}
                </Button>
              </Link>
            ))}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={centerLogo} className="App-logo" alt="logo" />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopNav;
