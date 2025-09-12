import '../styles/global.css';

import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Footer() {
  return (
    <AppBar position="static" className="appBarContainer">
      <Toolbar sx={{ gap: 1 }}>
        <Typography className="bodyInverse">Last updated Sept. 8, 2025</Typography>
      </Toolbar>
      <img src="/footer-critter.svg" alt="" className="footerCritter anim"/>
    </AppBar>
  );
}
