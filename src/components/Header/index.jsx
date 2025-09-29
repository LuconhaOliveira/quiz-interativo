import styles from "./Header.module.css"

const Header = ({ currentQuestion, totalQuestions, timer }) => {
  return (
    <header className={styles.header}>
      <h1>Quiz Interativo</h1>
      <div className={styles.headerInfo}>
        <span className={styles.questionCounter}>
          Questão {currentQuestion} de {totalQuestions}
        </span>
        <span className={styles.timer}>Tempo: {timer} segundos</span>
      </div>
    </header>
  );
};

export default Header