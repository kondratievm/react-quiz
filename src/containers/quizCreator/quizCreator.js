import {Component} from "react";
import s from './quizCreator.module.css';
import Button from "../../components/ui/button/button";
import {createControl} from "../../form/formFramework";
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