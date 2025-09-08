import '../styles/global.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" className="appBarContainer">
        <Toolbar className="toolbarContainer">
            <Fab variant="extended" size="medium" className="button">About</Fab>
            <Fab variant="extended" size="medium" className="button">Projects</Fab>
            <Fab variant="extended" size="medium" className="button">Contact</Fab>
        </Toolbar>
      </AppBar>
    </Box>
  );
}