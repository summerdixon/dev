import '../styles/global.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer() {

  return (
    <Box>
      <AppBar position="relative" className="appBarContainer" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography className="bodyInverse">Last updated Sept. 8, 2025</Typography>          
        </Toolbar>
        <img src="/footer-critter.svg" alt="" className="footerCritter" />
      </AppBar>
    </Box>
  );
}
