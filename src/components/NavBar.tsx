import '../styles/global.css';

import { AppBar, Box, Fab, Toolbar } from '@mui/material';

export default function NavBar() {
    return (
        <Box style={{ position: "fixed", top: 0, width: "100%", zIndex: 3 }}>
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