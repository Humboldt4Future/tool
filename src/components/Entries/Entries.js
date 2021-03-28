import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Entry from './Entry/Entry.js';
import useStyles from './styles.js';

const Entries = ({ currentId, setCurrentId }) => {
    const entries = useSelector((state) => state.entries);
    const classes = useStyles();

    console.log(entries);

    return (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {entries.map(entry => (
                <Grid key={entry._id} item xs={12} sm={12}>
                    <Entry entry={entry} setCurrentId={setCurrentId}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default Entries;