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
        flexDirection="row"
        flexWrap="wrap"
        flex="1"
    >
        {Object.keys(object).map((id, index) => (
            <ToggleButton 
                key={`${object[id].name}-${index}`}
                value={index}
                aria-label={object[id].name}
                gridTemplateColumns="max-content"
                flexGrow="1"
            >
                {object[id].name}
            </ToggleButton>
        ))}
    </Container>
    </ToggleButtonGroup>
);

export default MappedToggleButton;
