import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createEntry, updateEntry } from '../../actions/entries.js';

const OldForm = ({ currentId, setCurrentId }) => {
    const [entryData, setEntryData] = useState({ creator: '', title: '', message: '', tags: '' });
    const entry = useSelector((state) => currentId ? state.entries.find((e) => e._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => { if(entry) setEntryData(entry); }, [entry]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateEntry(currentId, entryData));
        } else {
            dispatch(createEntry(entryData));
        }
        
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setEntryData({ creator: '', title: '', message: '', tags: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root}${classes.form}`} onSubmit={handleSubmit}>
                <Typography className={classes.question} variant="h4">
                    Enter your Nickname here
                    <p className={classes.info}>
                        once it's actually implemented you can retrieve your score later by looking up your Nickname
                    </p>
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={entryData.creator} onChange={(e) => setEntryData({ ...entryData, creator: e.target.value })}/>
                <Typography className={classes.question} variant="h5">
                    Answer the first question:
                </Typography>
                <TextField name="title" variant="outlined" label="Answer" fullWidth value={entryData.title} onChange={(e) => setEntryData({ ...entryData, title: e.target.value })}/>
                <Typography className={classes.question} variant="h5">
                    Answer the second question:
                </Typography>
                <TextField name="message" variant="outlined" label="Answer" fullWidth value={entryData.message} onChange={(e) => setEntryData({ ...entryData, message: e.target.value })}/>
                <Typography className={classes.question} variant="h5">
                    Answer the last questions:
                    <p className={classes.info}>
                        Answers need to be separated by a comma
                    </p>
                </Typography>
                <TextField name="tags" variant="outlined" label="Answer" fullWidth value={entryData.tags} onChange={(e) => setEntryData({ ...entryData, tags: e.target.value.split(',') })}/>
                <Typography className={classes.question} variant="h5">
                    <br/>
                    Sie stimmen den Geschäftsbedingungen zu
                </Typography>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default OldForm;