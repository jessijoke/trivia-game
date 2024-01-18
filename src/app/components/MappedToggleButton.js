import React from 'react';
import { 
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import StyledH3 from './StyledH3';

const MappedToggleButton = ({ array, state, setState, handleSetState, ariaLabel }) => (

<ToggleButtonGroup
    value={state}
    exclusive
    onChange={handleSetState(setState)}
    aria-label={ariaLabel}
>
    {array.map((category, index) => (
        <ToggleButton key={`${category}-${index}`} value={category} aria-label={category}>
            <StyledH3 text={category} />
        </ToggleButton>
    ))}
</ToggleButtonGroup>
);

export default MappedToggleButton;
