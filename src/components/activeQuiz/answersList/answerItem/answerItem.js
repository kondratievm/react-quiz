import cls from './answerItem.module.css';

const AnswerItem = props => {
    const classes = [cls.AnswerItem];

    if (props.state) {
        classes.push(cls[props.state])
    }

    return (
        <li
            className={classes.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
};

export default AnswerItem;
