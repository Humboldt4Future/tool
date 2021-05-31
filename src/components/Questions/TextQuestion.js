import React, {useState} from 'react';
import { makeStyles, Typography, Grid, TextField } from '@material-ui/core';

const TextQuestion = ({questionText,questionContext=""}) => {
    const useStyles = makeStyles({
        question: {
            textAlign: 'center',
        },
        textfield: {
            maxWidth: '40%',
        }
    });
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleTextFieldChange = (event, newValue) => {
        console.log(value+`\t`+newValue);
        setValue(newValue);
    }

    return (
        <div>
            <Typography className={classes.question} variant="h5">
                {questionText}
            </Typography>
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs className={classes.textfield}>
                    <TextField value={value} onChange={handleTextFieldChange} variant="outlined"/>
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

export default TextQuestion;