import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmailIcon from '@mui/icons-material/Email';
function Footer() {

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigationAction label="Recents" icon={<LinkedInIcon />} />
      <BottomNavigationAction label="Favorites" icon={<GitHubIcon />} />
      <BottomNavigationAction label="Archive" icon={<EmailIcon />} />
    </BottomNavigation>
  );

}

export default Footer;