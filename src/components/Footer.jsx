import * as React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  const emailTo = "derzanchiang1800@gmail.com";
  const bottomNavigationUrls = {
    LinkedIn: "https://www.linkedin.com/in/derzan/",
    GitHub: "https://github.com/MiTo0o",
    Email: `mailto:${emailTo}`,
  };
  return (
    <BottomNavigation
      showLabels
      onChange={(event, newValue) => {
        window.open(bottomNavigationUrls[newValue], "_blank");
      }}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigationAction
        label="LinkedIn"
        value="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        label="GitHub"
        value="GitHub"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        label="Email"
        value="Email"
        icon={<EmailIcon />}
      />
    </BottomNavigation>
  );
}

export default Footer;
