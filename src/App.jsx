import { useState,useEffect } from "react"
import styles from './App.module.css'
import Header from './components/Header';
import questions from "./data/questions";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [questionIndex,setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [answers, setAnswer] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  });

  const answerQuestion = (chose)=>{
    setAnswer([...answers, { id: questions[questionIndex].id, optionChosen: chose, timer:timer }]);
    setTimer(0);
    setQuestionIndex(questionIndex+1);
  }

  useEffect(() => {
    localStorage.setItem("answers", 
      JSON.stringify(answers))
  }, [answers])

  return (
    <>
      <Header currentQuestion={questionIndex+1} totalQuestions={questions.length} timer={timer} />
      <QuestionCard question={questions[questionIndex].question} options={questions[questionIndex].options} answerQuestion={answerQuestion} />
    </>
  )
}

export default App
