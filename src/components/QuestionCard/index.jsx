import styles from "./QuestionCard.module.css"

const QuestionCard = ({ question, options, answerQuestion }) => {
  return (
    <section className={styles.card}>
      <h2>{question}</h2>
      <div className={styles.optionsList}>
        <button className="optionsItem" onClick={()=>answerQuestion(options[0])}>{options[0]}</button>
        <button className="optionsItem" onClick={()=>answerQuestion(options[1])}>{options[1]}</button>
        <button className="optionsItem" onClick={()=>answerQuestion(options[2])}>{options[2]}</button>
        <button className="optionsItem" onClick={()=>answerQuestion(options[3])}>{options[3]}</button>
      </div>
    </section>
  );
};

export default QuestionCard