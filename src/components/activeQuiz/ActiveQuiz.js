import cls from './ActiveQuiz.module.css';
import AnswersList from "./answersList/answersList";

const ActiveQuiz = (props) => (
    <div className={cls.ActiveQuiz}>
        <p className={cls.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>

            <small>{props.answerNumber} from {props.quizLength}</small>
        </p>

        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz;
