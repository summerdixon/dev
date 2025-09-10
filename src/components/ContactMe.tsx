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
            setCopySuccess('Copied email to clipboard!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
            console.error('Failed to copy text: ', err);
        }
            setTimeout(() => {
            setCopySuccess('');
            }, 2000);
      };

    return (
        <Box className="contentContainer" style={{ gap: "var(--space-md)"}}>
            <Typography className="heading" style={{ paddingTop: "var(--space-xl)" }}>Please Reach Out!</Typography>
            <Box style={{ display: "flex", alignSelf: "flex-start", gap: "var(--space-sm)" }}>
                <Fab variant="extended" size="medium" className="button" style={{ display: "flex", alignSelf: "flex-start", gap: "var(--space-sm)" }} href="mailto:s.dixon@g.ucla.edu">
                    <Email/>
                    s.dixon@g.ucla.edu
                </Fab>
                <IconButton onClick={handleCopyClick}>
                    <ContentCopy style={{ color: "var(--color-blue-secondary)"}}/>
                </IconButton>
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