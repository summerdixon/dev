import '../styles/global.css';

import { Box } from '@mui/material';

export default function Hero() {
  return (
    <Box className="heroContainer">
        <img src={`${import.meta.env.BASE_URL}hero-img.svg`} alt="Hero image" className="centeredImage"/>
        {/* <img src="/arrow-cursor.svg" alt="" className="movingArrow anim" /> */}
    </Box>
  );
}
