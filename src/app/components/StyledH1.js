import React from 'react';
import { 
    Typography,
} from '@mui/material';
import { purifyHtml } from '../utils';

const StyledH1 = ({ text }) => {
    return (
        <Typography component="h1" variant="h2" align="center" color="textPrimary" dangerouslySetInnerHTML={{ __html: purifyHtml(text) }} gutterBottom>
        </Typography>
    );
};

export default StyledH1;
