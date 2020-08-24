import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { QuizCardType } from '../types/quizAppTypes';
import { QuizContext } from '../context/QuizContext';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: '10px 0',
    },
    option: {
      padding: '10px 20px',
      margin: '10px 0',
    },
    btnWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      padding: '10px 30px',
      backgroundColor: '#00695f',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#00695f',
      },
    },
    radio: {
      '&$checked': {
        color: '#00695f',
      },
    },
    checked: {
      color: '#00695f',
    },
  })
);

//display single quiz option
const DisplayQuizOption: React.FC<any> = ({ value, handleChange }) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.option}>
      <FormControlLabel
        value={value}
        control={
          <Radio classes={{ root: classes.radio, checked: classes.checked }} />
        }
        label={value}
        onChange={handleChange}
      />
    </Paper>
  );
};

const QuizCard: React.FC<QuizCardType> = ({
  question,
  options,
  callback,
  setUserAns,
  currentQuestionNumber,
}) => {
  const classes = useStyles();
  const { quizMetaData } = useContext(QuizContext);

  //store user seleted answer
  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setUserAns(e.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        {`Question ${currentQuestionNumber + 1} / ${
          quizMetaData.totalQuestions
        }`}
      </Typography>
      <Paper elevation={0} className={classes.paper}>
        <Typography variant='body1'>{question}</Typography>
        <RadioGroup aria-label='gender' name='gender1'>
          {options.map((option, index) => (
            <DisplayQuizOption
              key={index}
              value={option}
              handleChange={handleChange}
            />
          ))}
        </RadioGroup>
      </Paper>
      <div className={classes.btnWrapper}>
        <Button
          variant='contained'
          className={classes.button}
          onClick={callback}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
};

export default QuizCard;
