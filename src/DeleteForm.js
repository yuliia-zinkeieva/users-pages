import React from 'react'
import {Field, reduxForm} from 'redux-form'
import deleteSubmit from "./deleteSubmit";

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
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

const DeleteForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit(deleteSubmit)}>
            <Field name="email" type="email" component={renderField} label="Email of customer"/>
            <div>
                <h1></h1>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'deleteForm',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
})(DeleteForm)