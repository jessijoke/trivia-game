import React from 'react';
import { 
    Typography,
} from '@mui/material';
import { purifyHtml } from '../utils';

const StyledP = ({ text }) => (
    <Typography component="p" align="center" color="textPrimary" dangerouslySetInnerHTML={{ __html: purifyHtml(text) }} gutterBottom>
    </Typography>
);

export default StyledP;
