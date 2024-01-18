import React from 'react';
import { 
    Typography,
} from '@mui/material';

const StyledH1 = ({ text }) => {
    return (
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {text}
        </Typography>
    );
};

export default StyledH1;
