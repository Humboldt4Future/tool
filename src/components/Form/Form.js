import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, Grid, TextField, Checkbox, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Select, InputLabel, Switch, Slider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createEntry, updateEntry } from '../../actions/entries.js';

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
            input1 : 'Kurzstrecke ohne Antwort',
            input2 : 'Mittelstrecke ohne Antwort',
            input3 : 'Langstrecke ohne Antwort',
            input4 : '1',
            input5 : 'Heizspanne ohne Antwort',
            input6 : 'Heizungstyp ohne Antwort',
            input7 : 'Heizdauer ohne Antwort',
            input8 : '',
            input9 : ''
         });
    }

    const [val_HeizungsStufe, setVal_HeizungsStufe] = React.useState(1)

    {/*
    const [checked, setChecked] = React.useState(true);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [sliderValue, setSliderValue] = React.useState(50);
    const [switchChecked, setSwitchChecked] = React.useState(false);
    */}

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root}${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h3">
                    Fluege
                </Typography>
                <Typography variant="h6">
                    Wie oft sind sie in den letzten 12 Monaten wie weit geflogen?
                </Typography>
                <Box>
                    <FormControl className={classes.FormControl}>
                        <InputLabel>Kurzstrecke:</InputLabel>
                        <Select native value={entryData.input1} onChange={(e)=> setEntryData({...entryData, input1: e.target.value })}>
                            <option aria-label="None" value="" />
                            <option value={'keine Kurzstrecke'}>Gar nicht</option>
                            <option value={'ein bisschen Kurzstrecke'}>Ein paar Mal</option>
                            <option value={'viel Kurzstrecke'}>Öfters</option>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.FormControl}>
                        <InputLabel>Mittelstrecke:</InputLabel>
                        <Select native value={entryData.input2} onChange={(e)=> setEntryData({...entryData, input2: e.target.value })}>
                            <option aria-label="None" value="" />
                            <option value={'keine Mittelstrecke'}>Gar nicht</option>
                            <option value={'ein bisschen Mittelstrecke'}>Ein paar Mal</option>
                            <option value={'viel Mittelstrecke'}>Öfters</option>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.FormControl}>
                        <InputLabel>Langstrecke:</InputLabel>
                        <Select native value={entryData.input3} onChange={(e)=> setEntryData({...entryData, input3: e.target.value })}>
                            <option aria-label="None" value="" />
                            <option value={'keine Langstrecke'}>Gar nicht</option>
                            <option value={'ein bisschen Langstrecke'}>Ein paar Mal</option>
                            <option value={'viel Langstrecke'}>Öfters</option>
                        </Select>
                    </FormControl>
                </Box>
                <Typography variant="h3">
                    Heizung
                </Typography>
                <Typography variant="h6">
                    Auf welcher Stufe heizen sie normalerweise?
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <h1>
                            {val_HeizungsStufe}
                        </h1>
                    </Grid>
                    <Grid item xs>
                        <Slider value={val_HeizungsStufe} onChange={(e, newValue) => {setEntryData({...entryData, input4: newValue }); setVal_HeizungsStufe(newValue);}} aria-labelledby="continuous-slider" step={1} marks min={1} max={5}/>
                    </Grid>
                </Grid>
                <Typography variant="h6">
                    In welchen Jahreszeiten heizen sie?
                </Typography>
                <FormControl className={classes.FormControl}>
                    <InputLabel>Spanne:</InputLabel>
                    <Select native value={entryData.input5} onChange={(e)=> setEntryData({...entryData, input5: e.target.value })}>
                        <option aria-label="None" value="" />
                        <option value={'Sommer'}>Sommer</option>
                        <option value={'Winter'}>Winter</option>
                        <option value={'Herbst'}>Herbst</option>
                        <option value={'Fruehling'}>Fruehling</option>
                        <option value={'Alle'}>Alle</option>
                    </Select>
                </FormControl>
                <Typography variant="h6">
                    Welchen Heizungstyp benutzen sie?
                </Typography>
                <FormControl className={classes.FormControl}>
                    <InputLabel>Typ:</InputLabel>
                    <Select native value={entryData.input6} onChange={(e)=> setEntryData({...entryData, input6: e.target.value })}>
                        <option aria-label="None" value="" />
                        <option value={'Oel'}>Oel</option>
                        <option value={'Gas'}>Gas</option>
                        <option value={'Elektro'}>Elektro</option>
                        <option value={'Keine Ahnung'}>Keine Ahnung</option>
                    </Select>
                </FormControl>
                <Typography variant="h6">
                    Wie lange heizen sie täglich?
                </Typography>
                <FormControl className={classes.FormControl}>
                    <InputLabel>Dauer:</InputLabel>
                    <Select native value={entryData.input7} onChange={(e)=> setEntryData({...entryData, input7: e.target.value })}>
                        <option aria-label="None" value="" />
                        <option value={'0-4h'}>0-4h</option>
                        <option value={'4-8h'}>4-8h</option>
                        <option value={'8-12h'}>8-12h</option>
                        <option value={'12-16h'}>12-16h</option>
                        <option value={'16-20h'}>16-20h</option>
                        <option value={'20-24h'}>20-24h</option>
                    </Select>
                </FormControl>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
                {/*
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
                */}
                {/*
                <SliderQuestion questionText={"Wie oft fliegen sie in den Urlaub?"} questionContext={"mal im Jahr"}/>
                <TextQuestion questionText={"Wie oft fliegen sie in den Urlaub?"} questionContext={"mal im Jahr"}/>
                */}
            </form>
        </Paper>
    );
}

export default Form;