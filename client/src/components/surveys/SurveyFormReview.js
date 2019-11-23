import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'

import FIELDS from './formFields'

import * as actions from '../../actions' //action creator, sendet vvlt nur mails


const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    const reviewFields = _.map(FIELDS, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })


    return (
        <div>
            <h3>confrim entries:</h3>
            {reviewFields}
            <button onClick={onCancel}>back</button>
            <button onClick={() => submitSurvey(formValues, history)}>Submit and send</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
