import cls from './answersList.module.css';
import AnswerItem from "./answerItem/answerItem";

const AnswersList = props => (
    <ul className={cls.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                />
            )
        })}
    </ul>
)

export default AnswersList;
