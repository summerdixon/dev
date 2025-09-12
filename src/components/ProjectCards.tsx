import '../styles/global.css';

import { Box, Typography } from '@mui/material';

const projectImages = ['/projects/project-1.svg', '/projects/project-2.svg', '/projects/project-3.svg', '/projects/project-4.svg', '/projects/project-5.svg', '/projects/project-6.svg', '/projects/project-7.svg', '/projects/project-8.svg'];

export default function ProjectCards() {
    return (
        <Box className="contentContainer" style={{ marginTop: "var(--space-4xl)" }}>
            <Typography className="heading">Projects</Typography>
            <Box className="projectsContainer">
                {projectImages.map((item) => (
                    <img src={item}/>
                ))}
            </Box>
        </Box>
    );
}