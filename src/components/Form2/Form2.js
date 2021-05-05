import React, { useState, useEffect } from 'react';
import { Slider, Grid, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createEntry, updateEntry } from '../../actions/entries.js';
import SliderQuestion from '../Questions/SliderQuestion.js';

const Form2 = ({ currentId, setCurrentId }) => {
    const [entryData, setEntryData] = useState({ creator: '', title: '', message: '', tags: '' });
    const entry = useSelector((state) => currentId ? state.entries.find((e) => e._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(30);

    useEffect(() => { if(entry) setEntryData(entry); }, [entry]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <SliderQuestion questionText={"Wie oft fliegen sie in den Urlaub?"} questionContext={"mal im Jahr"}/>
            </form>
        </Paper>
    );
}

export default Form2;