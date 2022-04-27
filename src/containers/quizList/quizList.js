import {Component} from "react";
import s from './quizList.module.css';
import {NavLink} from "react-router-dom";
import axios from 'axios';

export default class QuizList extends Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-quiz-f5dfc-default-rtdb.firebaseio.com/quiz.json').then(response => {
            console.log(response, 'resp')
        })
    }

    render() {
        return (
            <div className={s.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}