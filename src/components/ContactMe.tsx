import '../styles/global.css';

import { useState } from 'react';
import { Alert, Box, Fab, IconButton, Typography } from '@mui/material';
import { ContentCopy, Email, AccountBox } from '@mui/icons-material';

export default function ContactMe() {
    const [textToCopy] = useState("s.dixon@g.ucla.edu");
    const [copySuccess, setCopySuccess] = useState('');

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopySuccess('Email copied to clipboard!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
            console.error('Failed to copy text: ', err);
        }
            setTimeout(() => {
            setCopySuccess('');
            }, 2000);
      };

    return (
        <Box className="contentContainer" style={{ gap: "var(--space-sm)"}}>
            <Typography className="heading" style={{ paddingTop: "var(--space-4xl)" }}>
                Please Reach Out!
            </Typography>
            <Typography className="body" style={{ paddingBottom: "var(--space-sm)"}}>
                I would love to hear from you via email or LinkedIn!
            </Typography>
            <Box className="linkContainer">
                <Box style={{ display: "flex", flexDirection: "row" }}>
                    <Fab variant="extended" size="medium" className="button" style={{ display: "flex", alignSelf: "flex-start", gap: "var(--space-sm)" }} href="mailto:s.dixon@g.ucla.edu">
                        <Email/>
                        s.dixon@g.ucla.edu
                    </Fab>
                <IconButton onClick={handleCopyClick}>
                    <ContentCopy style={{ color: "var(--color-blue-secondary)"}}/>
                </IconButton>
                </Box>
                {copySuccess && <Alert className="alert">{copySuccess}</Alert>}
            </Box>
            <Fab 
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="extended" 
                size="medium" 
                className="button" 
                style={{ display: "flex", alignSelf: "flex-start", gap: "var(--space-sm)" }} 
                href="https://www.linkedin.com/in/summer-dixon-ucla/"
            >
                <AccountBox/>
                LinkedIn
            </Fab>
        </Box>
    );
}