import '../styles/global.css';

import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Circle } from '@mui/icons-material';

export default function Hero() {
    const [showImage, setShowImage] = React.useState(false);

    const handleClick = () => setShowImage(true);

    return (
        <Box className="heroContainer">
            <img src="/landscape-window.svg" className="centeredImage"></img>
            <Typography className="title"> Summer Dixon </Typography>
            <IconButton 
                className="xButton"
                onClick={handleClick}
            >
                <Circle/>
            </IconButton>
            <img src="/arrow-cursor.svg" alt="" className="movingArrow anim"/>
            {showImage && <img src="/memoji.svg" alt="" className="memoji"/>}
        </Box>
    );
}