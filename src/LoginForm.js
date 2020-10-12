import React from 'react'
import {Field, reduxForm} from 'redux-form'
import loginSubmit from './loginSubmit'

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}


const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && (error && <span>{error}</span>)}
        <h1></h1>
    </div>
)

const LoginForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit(loginSubmit)}>
            <Field name="email" type="email" component={renderField} label="Email"/>
            <Field name="password" type="password" component={renderField} label="Password"/>

            <div>
                <h1></h1>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'loginForm',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    //warn                     // <--- warning function given to redux-form
})(LoginForm)