import '../styles/global.css';

import { Box, Fab, Typography } from '@mui/material';
import { Email, AccountBox } from '@mui/icons-material';

export default function ContactMe() {
    return (
        <Box className="contentContainer" style={{ gap: "var(--space-md)"}}>
            <Typography className="heading" style={{ paddingTop: "var(--space-xl)" }}>Please Reach Out!</Typography>
            <Fab variant="extended" size="medium" className="button" style={{ display: "flex", alignSelf: "flex-start", gap: "var(--space-sm)" }} href="mailto:s.dixon@g.ucla.edu">
                <Email/>
                s.dixon@g.ucla.edu
            </Fab>
            <Fab variant="extended" size="medium" className="button" style={{ display: "flex", alignSelf: "flex-start", gap: "var(--space-sm)" }} href="https://www.linkedin.com/in/summer-dixon-ucla/">
                <AccountBox/>
                LinkedIn
            </Fab>
        </Box>
    );
}