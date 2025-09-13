import '../styles/global.css';

import { Box } from '@mui/material';

export default function Hero() {
  return (
    <Box className="heroContainer">
        <img src="/hero-img.svg" alt="computer window" className="centeredImage"/>
        {/* <img src="/arrow-cursor.svg" alt="" className="movingArrow anim" /> */}
    </Box>
  );
}
