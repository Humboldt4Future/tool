import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import logo from '../../images/h4f.png';

const Heading = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.appBar}>
            <Box display={{xs: 'none', sm: 'block'}}>
                <Typography className={classes.heading} variant="h2" align="center">
                  Humboldt4Future
                </Typography>
            </Box>
            <Box display={{xs: 'block', sm: 'none'}}>
                <Typography className={classes.heading} variant="h2" align="center">
                  H4F
                </Typography>
            </Box>
            <img className={classes.image} src={logo} alt="logo" height="60"/>
        </Paper>
    )
}

export default Heading;