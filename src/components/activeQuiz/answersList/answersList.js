import cls from './answersList.module.css';
import AnswerItem from "./answerItem/answerItem";

const AnswersList = props => (
    <ul className={cls.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    state={props.state ? props.state[answer.id] : null}
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                />
            )
        })}
    </ul>
)

export default AnswersList;
