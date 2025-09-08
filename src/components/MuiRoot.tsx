import * as React from 'react';
import { StyledEngineProvider, CssBaseline } from '@mui/material';

export default function MuiRoot({ children }: React.PropsWithChildren) {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {children}
    </StyledEngineProvider>
  );
}