import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { QuizContext } from '../context/QuizContext';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '40px 50px',
      '@media(max-width:330px)': {
        padding: '40px 20px',
      },
    },
    heading: {
      color: '#666',
      fontWeight: 800,
      '@media(max-width:550px)': {
        textAlign: 'center',
      },
    },
    resultWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '@media(max-width:550px)': {
        flexDirection: 'column',
      },
    },
    pass: {
      color: 'green',
      fontWeight: 800,
    },
    fail: {
      color: 'red',
      fontWeight: 800,
    },
  })
);

const Result: React.FC<any> = ({ score }) => {
  const classes = useStyles();
  const { quizMetaData } = useContext(QuizContext);
  const percentage = (score / Number(quizMetaData.totalQuestions)) * 100;

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant='h4' gutterBottom className={classes.heading}>
        Your Result
      </Typography>
      <div className={classes.resultWrapper}>
        <div>
          <Typography variant='h6'>
            Total Questions = {quizMetaData.totalQuestions}
          </Typography>
          <Typography variant='h6'>Correct Answers = {score}</Typography>
          <Typography variant='h6' gutterBottom>
            Wrong Answers = {Number(quizMetaData.totalQuestions) - score}
          </Typography>
        </div>

        <Typography
          variant='h2'
          gutterBottom
          className={percentage >= 50 ? classes.pass : classes.fail}
        >
          {percentage}%
        </Typography>
      </div>
    </Paper>
  );
};

export default Result;
