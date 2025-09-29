import styles from "./ScoreBoard.module.css"

const ScoreBoard = ({ questions, answers, resetQuiz }) => {

    let pontuacao=0;
    let acertos = 0;
    let menorTempo;

    questions.map((question,i) => {
        if(question.answer==answers[i].optionChose){
           acertos+=1;
           pontuacao+=question.points
        }
        if(i==0)menorTempo=i;
        else if(answers.time<menorTempo) menorTempo=answers.time;
    });

    return (
        <section className={styles.results}>
            <header>
                <h2>Resultado final</h2>
                <span>Pontuação final: {pontuacao}</span>
                <span>Menor tempo: {menorTempo}</span>
                <span>Acertos: {acertos}</span>
                <button onClick={resetQuiz}>Reiniciar quiz</button>
            </header>
            <div className={styles.cardsList}>
                {questions.map((question,i) => (
                    <div key={question.id} className={styles.cardsItem}>
                        <p>Pergunta: {question.question}</p>
                        <p>Sua Resposta: {answers[i].optionChose}</p>
                        <p>Resposta Correta: {question.answer}</p>
                        <p>Pontos: {question.answer==answers[i].optionChose?question.points:0}</p>
                        <p>Tempo: {answers[i].time} segundos</p>
                        <p>{question.answer==answers[i].optionChose?"Correta":"Errada"}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScoreBoard