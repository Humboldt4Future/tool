import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import logo from './images/h4f.png';
import { getEntries } from './actions/entries.js';
import Entries from './components/Entries/Entries.js';
import Form from './components/Form/Form.js';
import Intro from './components/Intro/Intro.js';
import useStyles from './styles.js';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  },[currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
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
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item>
              <Entries setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item>
              <Intro/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
