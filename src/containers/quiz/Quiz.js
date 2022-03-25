import {Component} from "react";
import cls from './Quiz.module.css';
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                answers: [
                    {text: 'question 1'},
                    {text: 'question 2'},
                    {text: 'question 3'},
                    {text: 'question 4'}
                ],
            }
        ],
    }

    render() {
        return (
            <div className={cls.Quiz}>
                <div className={cls.QuizWrapper}>
                    <h1>ответьте на все вопросы</h1>

                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;