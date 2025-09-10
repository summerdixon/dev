import '../styles/global.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Toolbar from '@mui/material/Toolbar';

export default function NavBar() {
    return (
        <Box>
        <AppBar position="static" className="appBarContainer">
            <Toolbar className="toolbarContainer">
                <Fab variant="extended" size="medium" href="/" className="button">About</Fab>
                <Fab variant="extended" size="medium" href="/projects" className="button">Projects</Fab>
                <Fab variant="extended" size="medium" href="/contact" className="button">Contact</Fab>
            </Toolbar>
        </AppBar>
        </Box>
    );
}