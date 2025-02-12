import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { reducer as reduxForm } from 'redux-form'
import itemsReducer from './itemsReducer'

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    items: itemsReducer
})