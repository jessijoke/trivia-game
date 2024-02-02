import React, { useEffect } from 'react';
import { 
    ToggleButton,
    ToggleButtonGroup,
    Grid,
} from '@mui/material';
import { purifyHtml } from '../utils';

const MappedToggleButton = ({ object, state, setState, ariaLabel, value = 'id' }) => {
    const handleToggle = (value) => {
      const isSelected = state === value;
      setState(isSelected ? null : value);
    };
    useEffect(() => {
      // console.log('receieved answers', object)
    }, [object])
    
    
  
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
                value={value === 'id' ? object[id].id : object[id].name}
                aria-label={object[id].name}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: purifyHtml(object[id].name) }}></div>
              </ToggleButton>
            </Grid>
          ))}
        </Grid>
      </ToggleButtonGroup>
    );
  };

export default MappedToggleButton;