import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: '20px 30px',
    },
    option: {
      padding: '20px',
      margin: '20px 0',
    },
    button: {
      margin: '10px 0',
      padding: '10px 30px',
      backgroundColor: '#00695f',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#00695f',
      },
    },
  })
);

const QuizCard = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Typography variant='h6' gutterBottom>
          Question 1 / 5
        </Typography>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant='body1'>
            Which of the following characters from the game
            &quot;Overwatch&quot; was revealed to be homosexual in December of
            2016?
          </Typography>

          <Paper elevation={1} className={classes.option}>
            <Typography variant='body2'>Option1</Typography>
          </Paper>
          <Paper elevation={1} className={classes.option}>
            <Typography variant='body2'>Option2</Typography>
          </Paper>
          <Paper elevation={1} className={classes.option}>
            <Typography variant='body2'>Option3</Typography>
          </Paper>
          <Paper elevation={1} className={classes.option}>
            <Typography variant='body2'>Option4</Typography>
          </Paper>
        </Paper>
        <Button variant='contained' className={classes.button}>
          Next
        </Button>
      </Grid>
      <Grid item xs={1}></Grid>
    </React.Fragment>
  );
};

export default QuizCard;
