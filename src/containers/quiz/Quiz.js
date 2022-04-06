import {Component} from "react";
import cls from './Quiz.module.css';
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/finishedQuiz/finishedQuiz";

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
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
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results,
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results,
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {},
        })
    }

    render() {
        return (
            <div className={cls.Quiz}>
                <div className={cls.QuizWrapper}>
                    <h1>ответьте на все вопросы</h1>

                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                        : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;