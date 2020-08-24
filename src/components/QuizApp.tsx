import React, { useState, useContext } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StartingScreen from './StartingScreen';
import QuizScreen from './QuizScreen';
import { QuizContext } from '../context/QuizContext';

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
      height: '90vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 330px)': {
        height: '100vh',
      },
    },
  })
);

const QuizApp = () => {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const classes = useStyles();
  const { quizMetaData } = useContext(QuizContext);

  //change start screen with quiz screen
  const handleStartClick = (): void => {
    if (quizMetaData.name) {
      setStartQuiz(true);
    }
  };

  return (
    <div>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            QUIZ APP
          </Typography>
          {startQuiz && (
            <Typography variant='h6'>{quizMetaData.name}</Typography>
          )}
        </Toolbar>
      </AppBar>

      <Grid container className={classes.girdWrapper}>
        {!startQuiz && (
          <StartingScreen screenChangeHandler={handleStartClick} />
        )}
        {startQuiz && <QuizScreen />}
      </Grid>
    </div>
  );
};

export default QuizApp;
