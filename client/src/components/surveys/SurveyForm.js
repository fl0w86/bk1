import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import _ from 'lodash'

import SurveyField from './SurveyField'
import FIELDS from './formFields'


class SurveyForm extends React.Component {

    renderFields() {
        return _.map(FIELDS, field => {
            return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name} />
        })
    }

    render() {
        return (
            <div>
                SurveyForm
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}

                    <Link to="/surveys">cancel</Link>
                    <button type="submit">save</button>
                </form>
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {};

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = "Dont leave this empty"
        }
    })

    return errors;

}

export default reduxForm({
    form: 'surveyForm',
    validate: validate,
    destroyOnUnmount: false
})(SurveyForm)
