import { Box, Fab, Typography } from '@mui/material';

const base = import.meta.env.BASE_URL;

const projectImages = Array.from({ length: 8 }, (_, i) => `${base}projects/project-${i + 1}.svg`);

const projectURLs = [
  'https://colab.research.google.com/drive/1H4c7FuBGOAjnA9aU-f9UkUi_19b8ve6R?usp=sharing',
  'https://github.com/summerdixon/celebrity_classifier',
  'https://github.com/azh05/TasteBuds',
  'https://github.com/gweinrod/DartMonkey',
  'https://github.com/summerdixon/digital-preservation-sites',
  'https://musicevolution.humspace.ucla.edu/',
  'https://github.com/sophiacoulsell/mm_schematics',
  'https://github.com/summerdixon/fpga-bop-it'
];

const projects = projectImages.map((src, i) => ({ src, url: projectURLs[i] || "" }));

export default function ProjectCards() {
  return (
    <Box className="contentContainer" sx={{ mt: 'var(--space-4xl)' }}>
      <Typography className="heading">Projects</Typography>

      <Box className="projectsContainer">
        {projects.map(({ src, url }, i) => (
          <Box key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-sm)'}}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Box component="img" src={src} alt={`Project ${i + 1}`}/>
            </a>
            <Fab component="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="extended" 
                size="medium" 
                className="button" 
                href={url}
            >
                Link
            </Fab>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
