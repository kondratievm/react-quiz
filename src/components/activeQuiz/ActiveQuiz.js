import cls from './ActiveQuiz.module.css';
import AnswersList from "./answersList/answersList";

const ActiveQuiz = (props) => (
    <div className={cls.ActiveQuiz}>
        <p className={cls.Question}>
            <span>
                <strong>2.</strong>&nbsp;
                Text
            </span>

            <small>4 from 12</small>
        </p>

        <AnswersList
            answers={props.answers}
        />
    </div>
)

export default ActiveQuiz;
