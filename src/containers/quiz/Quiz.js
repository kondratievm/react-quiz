import {Component} from "react";
import cls from './Quiz.module.css';
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо ?',
                rightAnswerId: 1,
                answers: [
                    {text: 'Синий', id: 1},
                    {text: 'Желтый', id: 2},
                    {text: 'Черный', id: 3},
                    {text: 'Золотой', id: 4}
                ],
            },
            {
                id: 2,
                question: 'Что такое солнце ?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Планета', id: 1},
                    {text: 'Звезда', id: 2},
                    {text: 'Спутник', id: 3},
                    {text: 'Тело', id: 4}
                ],
            }
        ],
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={cls.Quiz}>
                <div className={cls.QuizWrapper}>
                    <h1>ответьте на все вопросы</h1>

                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;