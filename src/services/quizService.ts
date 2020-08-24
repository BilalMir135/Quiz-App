import { QuizType, QuestionType } from '../types/quizAppTypes';

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const getQuizDetail = async (
  totalQuestion: string,
  level: string
): Promise<QuizType[]> => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}`
  );
  const { results } = await response.json();
  const quiz: QuizType[] = results.map((questionObj: QuestionType) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      options: shuffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });
  return quiz;
};
