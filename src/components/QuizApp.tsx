import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StartingScreen from './StartingScreen';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: '#00695f',
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Luckiest Guy',
      letterSpacing: 2,
    },
    girdWrapper: {
      margin: '30px 0',
    },
  })
);

const QuizApp = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            QUIZ APP
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.girdWrapper}>
        <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
          <Paper>
            <StartingScreen />
          </Paper>
        </Grid>
        <Grid item xs={false} sm={1}></Grid>
      </Grid>
    </div>
  );
};

export default QuizApp;
