import '../styles/global.css';

import { Box, Typography } from '@mui/material';

const base = import.meta.env.BASE_URL;
const projectImages = Array.from({ length: 8 }, (_, i) => `${base}projects/project-${i + 1}.svg`);

export default function ProjectCards() {
  return (
    <Box className="contentContainer" style={{ marginTop: "var(--space-4xl)" }}>
      <Typography className="heading">Projects</Typography>
      <Box className="projectsContainer">
        {projectImages.map((src, i) => (
          <img key={i} src={src} alt={`Project ${i + 1}`} loading="lazy" />
        ))}
      </Box>
    </Box>
  );
}
