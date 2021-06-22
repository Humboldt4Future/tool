import React, { useState, useEffect } from 'react';
import { Paper, TextField, Checkbox, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Select, InputLabel, Switch, Slider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createEntry, updateEntry } from '../../actions/entries.js';
import SliderQuestion from '../Questions/SliderQuestion.js';
import TextQuestion from '../Questions/TextQuestion.js';

const Form = ({ currentId, setCurrentId }) => {
    const [entryData, setEntryData] = useState({
        input1 : '',
        input2 : '',
        input3 : '',
        input4 : '',
        input5 : '',
        input6 : '',
        input7 : '',
        input8 : '',
        input9 : ''
     });
    const entry = useSelector((state) => currentId ? state.entries.find((e) => e._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => { if(entry) setEntryData(entry); }, [entry]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(entryData);

        dispatch(createEntry(entryData));
        
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setEntryData({
            input1 : "Text",
            input2 : "Checked",
            input3 : "Radio",
            input4 : "Select",
            input5 : "Slider",
            input6 : "Switch",
            input7 : '',
            input8 : '',
            input9 : ''
         });
    }

    const [checked, setChecked] = React.useState(true);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [sliderValue, setSliderValue] = React.useState(50);
    const [switchChecked, setSwitchChecked] = React.useState(false);

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root}${classes.form}`} onSubmit={handleSubmit}>
                <TextField name="input1" variant="outlined" label="Input1" fullWidth value={entryData.input1} onChange={(e) => setEntryData({ ...entryData, input1: e.target.value })}/>
                <Checkbox name="input2" checked={checked} value={entryData.input2} onChange={(e) => {setEntryData({...entryData, input2: (e.target.value)?"true":"false" }); setChecked(e.target.checked);}}/>
                <br/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                    </FormLabel>
                    <RadioGroup name="input3" aria-label="input3" defaultValue="one" value={entryData.input3} onChange={(e) => {setEntryData({...entryData, input3: e.target.value }); setSelectedValue(e.target.value);}}>
                        <FormControlLabel value="one" control={<Radio/>} label="one"/>
                        <FormControlLabel value="two" control={<Radio/>} label="two"/>
                        <FormControlLabel value="three" control={<Radio/>} label="three"/>
                    </RadioGroup>
                </FormControl>
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Alter</InputLabel>
                    <Select native value={entryData.input4} onChange={(e) => setEntryData({...entryData, input4: e.target.value })}>
                        <option aria-label="None" value="" />
                        <option value={10}>Zehn</option>
                        <option value={15}>Fünfzehn</option>
                        <option value={20}>Zwanzig</option>
                    </Select>
                </FormControl>
                <Slider value={sliderValue} onChange={(e, newValue) => {setEntryData({...entryData, input5: newValue }); setSliderValue(newValue);}} aria-labelledby="continuous-slider"/>
                <h1>
                    {sliderValue}
                </h1>
                <Switch checked={switchChecked} onChange={(e) => {setEntryData({...entryData, input6: (e.target.value)?"true":"false" }); setSwitchChecked(e.target.checked);}} name="Switch"/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
                {/*
                <SliderQuestion questionText={"Wie oft fliegen sie in den Urlaub?"} questionContext={"mal im Jahr"}/>
                <TextQuestion questionText={"Wie oft fliegen sie in den Urlaub?"} questionContext={"mal im Jahr"}/>
                */}
            </form>
        </Paper>
    );
}

export default Form;