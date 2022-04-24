import {Component} from "react";
import s from './quizCreator.module.css';
import Button from "../../components/ui/button/button";
import {createControl, validate, validateForm} from "../../form/formFramework";
import Input from "../../components/ui/input/input";
import Auxillary from "../../hoc/auxillary/auxillary";
import Select from "../../components/ui/select/select";

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
        rightAnswerId: 1,
        isFormValid: false,
        formControls: createFormControls(),
    }

    submitHandler = evt => {
        evt.preventDefault()
    }

    addQuestionHandler = evt => {
        evt.preventDefault()

        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;

        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.value},
                {text: option2.value, id: option2.value},
                {text: option3.value, id: option3.value},
                {text: option4.value, id: option4.value},
            ],
        }

        quiz.push(questionItem);

        this.setState({
            quiz,
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls(),
        })
    }

    createQuizHandler = evt => {
        evt.preventDefault()
        console.log(this.state.quiz)
    }

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls),
        })
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

    selectChangeHandler = evt => {
        this.setState({
            rightAnswerId: +evt.target.value
        })
    }

    render() {
        const select = <Select
            label='Выберите правильный ответ'
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4},
            ]}
        />

        return (
            <div className={s.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>

                    <form onSubmit={this.submitHandler}>

                        {this.renderInputs()}
                        {select}

                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}
                        >
                           Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}