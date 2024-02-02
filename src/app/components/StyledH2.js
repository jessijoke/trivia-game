import React from 'react';
import { 
    Typography,
} from '@mui/material';
import { purifyHtml } from '../utils';

const StyledH2 = ({ text }) => (
    <Typography component="h2" variant="h3" align="center" color="textPrimary" dangerouslySetInnerHTML={{ __html: purifyHtml(text) }} gutterBottom>
    </Typography>
);

export default StyledH2;
