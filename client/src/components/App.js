import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Dashboard from './Dashboard'

import SurveyNew from './surveys/SurveyNew'

const Landing = () => <h2>Landing</h2>;
const Secret = () => <h2>Secret</h2>;


class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Landing} />
                    <Route path="/surveys" exact component={Dashboard} />
                    <Route path="/secret" exact component={Secret} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);
