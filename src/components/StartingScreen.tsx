import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ScreenType } from '../types/quizAppTypes';
import { QuizContext } from '../context/QuizContext';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '50px 30px',
      width: '100%',
    },
    paper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      margin: '20px 0',
      width: '100%',
      '& label.Mui-focused': {
        color: '#00695f',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#00695f',
      },
    },
    button: {
      margin: '20px 0',
      padding: '15px',
      backgroundColor: '#00695f',
      color: '#fff',
      width: '100%',
      '&:hover': {
        backgroundColor: '#00695f',
      },
    },
  })
);

const StartingScreen: React.FC<ScreenType> = ({ screenChangeHandler }) => {
  const classes = useStyles();
  const {
    quizMetaData,
    changeName,
    changeLevel,
    changeTotalQuestions,
  } = useContext(QuizContext);

  return (
    <React.Fragment>
      <Grid item xs={1} sm={2} lg={3}></Grid>
      <Grid item xs={10} sm={8} lg={6}>
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.root}>
            <TextField
              required
              id='standard-required'
              label='Name'
              className={classes.input}
              onChange={changeName}
            />

            <br />
            <FormControl className={classes.input}>
              <InputLabel id='demo-simple-select-label'>Level</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={quizMetaData.level}
                onChange={changeLevel}
              >
                <MenuItem value={'easy'}>Easy</MenuItem>
                <MenuItem value={'medium'}>Medium</MenuItem>
                <MenuItem value={'difficult'}>Difficult</MenuItem>
              </Select>
            </FormControl>
            <br />

            <FormControl className={classes.input}>
              <InputLabel id='demo-simple-select-label'>
                No. of Questions
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={quizMetaData.totalQuestions}
                onChange={changeTotalQuestions}
              >
                <MenuItem value={'5'}>5</MenuItem>
                <MenuItem value={'10'}>10</MenuItem>
                <MenuItem value={'15'}>15</MenuItem>
                <MenuItem value={'20'}>20</MenuItem>
                <MenuItem value={'25'}>25</MenuItem>
                <MenuItem value={'30'}>30</MenuItem>
              </Select>
            </FormControl>

            <br />
            <Button
              variant='contained'
              className={classes.button}
              onClick={screenChangeHandler}
            >
              Start Quiz
            </Button>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={1} sm={2} lg={3}></Grid>
    </React.Fragment>
  );
};

export default StartingScreen;
