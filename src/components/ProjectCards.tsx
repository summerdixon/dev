import '../styles/global.css';

import { Box, Typography } from '@mui/material';

const projectImages = ['{`${import.meta.env.BASE_URL}projects/project-1.svg`}', '{`${import.meta.env.BASE_URL}projects/project-2.svg`}', '{`${import.meta.env.BASE_URL}projects/project-3.svg`}', '{`${import.meta.env.BASE_URL}projects/project-4.svg`}', '{`${import.meta.env.BASE_URL}projects/project-5.svg`}', '{`${import.meta.env.BASE_URL}projects/project-6.svg`}', '{`${import.meta.env.BASE_URL}projects/project-7.svg`}', '{`${import.meta.env.BASE_URL}projects/project-8.svg`}'];

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