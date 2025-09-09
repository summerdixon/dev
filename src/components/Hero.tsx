import '../styles/global.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Hero() {
    return (
        <Box className="heroContainer">
            <img src="/landscape-window.svg" className="centeredImage"></img>
            <Typography className="title"> Summer Dixon </Typography>
        </Box>
    );
}