import cls from './answerItem.module.css';

const AnswerItem = props => {
    return (
        <li className={cls.AnswerItem}>
            {props.answer.text}
        </li>
    )
};

export default AnswerItem;
