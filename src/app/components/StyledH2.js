import React from 'react';
import { 
    Typography,
} from '@mui/material';

const StyledH2 = ({ text }) => (
    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
        {text}
    </Typography>
);

export default StyledH2;
