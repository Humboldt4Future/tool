import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createEntry, updateEntry } from '../../actions/entries.js';
import SliderQuestion from '../Questions/SliderQuestion.js';
import TextQuestion from '../Questions/TextQuestion.js';

const Form = ({ currentId, setCurrentId }) => {
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
                <SliderQuestion questionText={"Wie oft fliegen sie in den Urlaub?"} questionContext={"mal im Jahr"}/>
                <TextQuestion questionText={"Wie oft fliegen sie in den Urlaub?"} questionContext={"mal im Jahr"}/>
            </form>
        </Paper>
    );
}

export default Form;