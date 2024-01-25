import React from 'react';
import { 
    ToggleButton,
    ToggleButtonGroup,
    Grid,
} from '@mui/material';

const MappedToggleButton = ({ object, state, setState, ariaLabel }) => {
    const handleToggle = (value) => {
      const isSelected = state === value;
      setState(isSelected ? null : value);
    };
  
    return (
      <ToggleButtonGroup
        value={state}
        exclusive
        onChange={(event, value) => handleToggle(value)}
        aria-label={ariaLabel}
      >
        <Grid container justifyContent="center" alignItems="center">
          {Object.keys(object).map((id, index) => (
            <Grid item key={`${object[id].name}-${index}`} xs={12} md={5} lg={4}>
              <ToggleButton
                value={id}
                aria-label={object[id].name}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {object[id].name}
              </ToggleButton>
            </Grid>
          ))}
        </Grid>
      </ToggleButtonGroup>
    );
  };

export default MappedToggleButton;