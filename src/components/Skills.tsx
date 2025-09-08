import '../styles/global.css';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const programmingLanguages = [ "Python", "C", "C++", "Java", "JavaScript", "TypeScript", "Rust", "Verilog"];
const frameworksLibraries = ["PyTorch", "React", "Node.js", "Flask", "Vite", "Three.js", "GraphQL", "Diesel"];
const systemsDatabasesDevOps = ["Azure", "Docker", "Git", "GitHub", "Linux/Unix", "PostgreSQL", "MongoDB", "RESTful APIs"];
const hardwareEmbeddedSystems = ["Arduino", "STM32", "KiCad", "FPGAs"];
const toolsMethodologies = ["Figma", "Adobe", "Tableau", "Jira", "Agile/Scrum"];

export default function Skills() {
    return (
        <Box className="contentContainer">
            <Typography className="heading">Skills</Typography>
            <Box className="chipGroup">
                {programmingLanguages.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
        </Box>
    );
}