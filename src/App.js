import Layout from "./hoc/layout/Layout";
import Quiz from './containers/quiz/Quiz';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import QuizList from "./containers/quizList/quizList";
import Auth from "./containers/auth/auth";
import QuizCreator from "./containers/quizCreator/quizCreator";
import {connect} from "react-redux";
import {Component} from "react";
import Logout from "./components/logout/logout";
import {autoLogin} from "./store/actions/auth";

class App extends Component {
    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        let routes = (
            <Switch>
                <Route path='/auth' component={Auth}/>
                <Route path='/quiz/:id' component={Quiz}/>
                <Route path='/' exact component={QuizList}/>
                <Redirect to='/' />
            </Switch>
        )

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path='/quiz-creator' component={QuizCreator}/>
                    <Route path='/quiz/:id' component={Quiz}/>
                    <Route path='/logout' component={Logout}/>
                    <Route path='/' exact component={QuizList}/>
                    <Redirect to='/' />
                </Switch>
            )
        }

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
