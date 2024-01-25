import React from 'react';
import { 
    Typography,
} from '@mui/material';

const StyledP = ({ text }) => (
    <Typography component="p" align="center" color="textPrimary" gutterBottom>
        {text}
    </Typography>
);

export default StyledP;
