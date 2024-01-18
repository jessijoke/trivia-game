import React from 'react';
import { 
    ToggleButton,
    ToggleButtonGroup,
    Container,
    Typography,
} from '@mui/material';
import StyledH3 from './StyledH3';

const MappedToggleButton = ({ object, state, setState, handleSetState, ariaLabel }) => (
    <ToggleButtonGroup
        value={state}
        exclusive
        onChange={handleSetState(setState)}
        aria-label={ariaLabel}
    >
    <Container 
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
    >
        {Object.keys(object).map((id, index) => (
            <ToggleButton key={`${object[id].name}-${index}`} value={index} aria-label={object[id].name}>
                {object[id].name}
            </ToggleButton>
        ))}
    </Container>
    </ToggleButtonGroup>
);

export default MappedToggleButton;
