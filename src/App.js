import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grow, Grid, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import logo from './images/h4f.png';
import { getEntries } from './actions/entries.js';
import Entries from './components/Entries/Entries.js';
import Form from './components/Form/Form.js';
import Intro from './components/Intro/Intro.js';
import useStyles from './styles.js';
import EntrySearch from './components/Entries/EntrySearch/EntrySearch';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  },[currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <Grow in>
        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item>
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
          </Grid>
          <Grid item>
            <Intro/>
          </Grid>
          <Grid item>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
          {/*
          <Grid item>
            <EntrySearch/>
          </Grid>
          */}
          <Grid item>
            <Entries setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
