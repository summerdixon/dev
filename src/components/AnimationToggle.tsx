import '../styles/global.css';

import * as React from 'react';
import { ToggleButton, Tooltip } from '@mui/material';
import { Animation } from '@mui/icons-material';

export default function AnimationToggle() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem('anim');
    const next = saved ? saved === 'on' : true;
    setEnabled(next);
    document.documentElement.setAttribute('data-anim', next ? 'on' : 'off');
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem('anim', next ? 'on' : 'off');
    document.documentElement.setAttribute('data-anim', next ? 'on' : 'off');
  };

  return (
    <Tooltip title="Toggle animations" arrow placement="bottom-start">
        <ToggleButton
            value="Toggle animations"
            selected={enabled}
            aria-pressed={enabled}
            onChange={toggle}
            size="small"
            className={enabled ? 'animationToggleEnabled' : 'animationToggleDisabled'}
        >
        <Animation fontSize="small" className={enabled ? 'animationIconEnabled' : 'animationIconDisabled'} />
        </ToggleButton>
    </Tooltip>
  );
}