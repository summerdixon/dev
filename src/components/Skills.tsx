import '../styles/global.css';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const programmingLanguages = [ "Python", "C", "C++", "Java", "JavaScript", "TypeScript", "Rust", "Verilog"];
const frameworksLibraries = ["PyTorch", "React", "Node.js", "Flask", "Vite", "Three.js", "GraphQL", "Diesel"];
const systemsDatabasesDevOps = ["Azure", "Docker", "Git", "GitHub", "Linux/Unix", "PostgreSQL", "MongoDB", "RESTful APIs"];
const hardwareEmbeddedSystems = ["Arduino", "STM32", "KiCad", "Soldering", "FPGAs"];
const toolsMethodologies = ["Figma", "Adobe", "Tableau", "Jira", "Agile/Scrum"];

export default function Skills() {
    return (
        <Box className="contentContainer">
            <Typography className="heading">Skills</Typography>
            <Typography className="headingSecondary">Programming Languages</Typography>
            <Box className="chipGroup">
                {programmingLanguages.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">Frameworks & Libraries</Typography>
            <Box className="chipGroup">
                {frameworksLibraries.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">Systems, Databases, & DevOps</Typography>
            <Box className="chipGroup">
                {systemsDatabasesDevOps.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">Hardware & Embedded Systems</Typography>
            <Box className="chipGroup">
                {hardwareEmbeddedSystems.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
            <Divider/>
            <Typography className="headingSecondary">Tools & Methodologies</Typography>
            <Box className="chipGroup">
                {toolsMethodologies.map((item) => (
                    <Chip label={item} className="chip"/>
                ))}
            </Box>
        </Box>
    );
}