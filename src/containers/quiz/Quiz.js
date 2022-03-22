import {Component} from "react";
import cls from './Quiz.module.css';

class Quiz extends Component {
    state = {
        quiz: [],
    }

    render() {
        return (
            <div className={cls.Quiz}>
                <h1>TEST</h1>
            </div>
        )
    }
}

export default Quiz;