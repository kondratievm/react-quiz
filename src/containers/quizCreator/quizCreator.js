import {Component} from "react";
import s from './quizCreator.module.css';
import Button from "../../components/ui/button/button";
import {createControl} from "../../form/formFramework";
import Input from "../../components/ui/input/input";
import Auxillary from "../../hoc/auxillary/auxillary";

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number,
    }, {required: true})
}

function createFormControls() {
     return {
         question: createControl({
             label: 'Введите вопрос',
             errorMessage: 'Вопрос не может быть пустым',
         }, {required: true}),
         option1: createOptionControl(1),
         option2: createOptionControl(2),
         option3: createOptionControl(3),
         option4: createOptionControl(4),
     }
}

export default class QuizCreator extends Component {
    state = {
        quiz: [],
        formControls: createFormControls(),
    }

    submitHandler = evt => {
        evt.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <Auxillary key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={evt => this.changeHandler(evt.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </Auxillary>
            )
        })
    }

    render() {
        return (
            <div className={s.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>

                    <form onSubmit={this.submitHandler}>

                        {this.renderInputs()}
                        <select></select>

                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                        >
                           Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}