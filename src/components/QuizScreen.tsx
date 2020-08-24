import React, { useState, useEffect, useContext } from 'react';
import QuizCard from './QuizCard';
import Result from './Result';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { QuizType } from '../types/quizAppTypes';
import { getQuizDetail } from '../services/quizService';
import { QuizContext } from '../context/QuizContext';

const QuizScreen = () => {
  const { quizMetaData } = useContext(QuizContext);
  const [quiz, setQuiz] = useState<QuizType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAns, setUserAns] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  //handle submit on every next click
  const handleSubmit = () => {
    const question: QuizType = quiz[currentQuestion];
    if (userAns) {
      if (userAns === question.answer) {
        setScore(score + 1);
      }
      if (currentQuestion !== quiz.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAns('');
      } else {
        setShowResult(true);
        setCurrentQuestion(0);
      }
    }
  };

  //fetching quiz data
  useEffect(() => {
    const getQuizData = async () => {
      const data: QuizType[] = await getQuizDetail(
        quizMetaData.totalQuestions,
        quizMetaData.level
      );
      setQuiz(data);
    };
    getQuizData();
  }, [quizMetaData.totalQuestions, quizMetaData.level]);

  if (!quiz.length) {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          {!showResult ? (
            <QuizCard
              options={quiz[currentQuestion].options}
              question={quiz[currentQuestion].question}
              callback={handleSubmit}
              setUserAns={setUserAns}
              currentQuestionNumber={currentQuestion}
            />
          ) : (
            <Result score={score} />
          )}
        </Grid>
        <Grid item xs={1}></Grid>
      </React.Fragment>
    );
  }
};

export default QuizScreen;
