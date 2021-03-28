import React from 'react';
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Entry from '../Entry/Entry.js';
import useStyles from './styles.js';

const EntrySearch = ({ setCurrentId }) => {
    const entries = useSelector((state) => state.entries);
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Grid container alignItems="stretch" spacing={3}>
            <Grid item>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                        <Typography variant="h4" >
                            Geben sie hier den Namen ein, unter dem sie ihren Eintrag erstellt haben
                        </Typography>
                        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={creator} onChange={}/>
                        <Button className={classes.buttonSearch} variant="contained" color="primary" size="large" type="submit" fullWidth>
                            Search
                        </Button>
                    </form>
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>
                    <Typography variant="h2">
                        
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default EntrySearch;