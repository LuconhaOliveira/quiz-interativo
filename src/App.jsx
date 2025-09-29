import { useState,useEffect } from "react"
import styles from './App.module.css'
import Header from './components/Header';
import questions from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [questionIndex,setQuestionIndex] = useState(0);
  const [answers, setAnswer] = useState([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
    setTimer(prevTimer => prevTimer + 1);
  }, 1000);

  return () => clearInterval(intervalId);
  });

  const answerQuestion = (chose)=>{
    setAnswer([...answers, { id: questions[questionIndex].id, optionChose: chose, time: timer }]);
    setTimer(0);
    setQuestionIndex(questionIndex+1);
  }

  const resetQuiz = ()=>{
    setAnswer([]);
    setTimer(0);
    setQuestionIndex(0);
  }

  useEffect(() => {
    localStorage.setItem("answers", 
      JSON.stringify(answers))
  }, [answers])

  return (
    <>
      {questionIndex<questions.length?
      <><Header currentQuestion={questionIndex+1} totalQuestions={questions.length} timer={timer} />
      <QuestionCard question={questions[questionIndex].question} options={questions[questionIndex].options} answerQuestion={answerQuestion} /></>
      : <ScoreBoard questions={questions} answers={answers} resetQuiz={resetQuiz} /> }
    </>
  )
}

export default App
