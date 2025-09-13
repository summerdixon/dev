import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default function Footer() {
  return (
    <AppBar position="static" className="appBarContainer">
      <Toolbar sx={{ gap: 1 }}>
        <Typography className="bodyInverse">Last updated Sept. 8, 2025</Typography>
      </Toolbar>
      <Box className="critterBox">
        <Box className="critterLane">
            <img src={`${import.meta.env.BASE_URL}footer-critter.svg`} alt="Pixelated shark" className="footerCritter anim" />
        </Box>
      </Box>
    </AppBar>
  );
}
