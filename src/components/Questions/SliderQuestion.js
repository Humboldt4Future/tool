import React, {useState} from 'react';
import { makeStyles, Typography, Grid, Slider} from '@material-ui/core';

const SliderQuestion = ({questionText,questionContext=""}) => {
    const useStyles = makeStyles({
        question: {
            textAlign: 'center',
        },
        slider: {
            maxWidth: '40%',
        }
    });
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Typography className={classes.question} variant="h5">
                {questionText}
            </Typography>
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs className={classes.slider}>
                    <Slider value={typeof value === 'number' ? value : 0} onChange={handleSliderChange}/>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        {value} {questionContext}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default SliderQuestion;