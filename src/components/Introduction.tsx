import '../styles/global.css';

import { Box, Typography } from '@mui/material';

const introText = "Hello! I am a third year undergraduate Computer Science and Engineering major with a minor in Digital Humanities at UCLA. My interests lie at the intersection of technology and the humanities, specifically with artificial intelligence, web development, computer graphics, and more. I'm actively seeking opportunities to gain experience in these fields as I combine my problem-solving and creativity while developing new technologies!";

export default function Introduction() {
    return (
        <Box className="contentContainer">
            <Typography className="heading">Introduction</Typography>
            <Typography className="body">{introText}</Typography>
        </Box>
    );
}