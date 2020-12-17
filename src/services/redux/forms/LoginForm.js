import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {useDispatch} from "react-redux";
import {loginAction} from "../actions/auth";
import {Container, Row} from "react-grid-system";
import Button from "@material-ui/core/Button";
// import {history} from "../../../utils/history";


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
        <h1> </h1>
    </div>
)

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const loginCallback = ({email, password} = {}) => {
        dispatch(loginAction(email, password));
    }

    const {error, handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit(loginCallback)}>
            <Field name="email" type="email" component={renderField} label="Email"/>
            <Field name="password" type="password" component={renderField} label="Password"/>
            {/*<Field name=error
            onChange form clear loginError
            */}
            {error && <strong>{error}</strong>}
            <Container>
                <Row>
                    <Button type="submit" disabled={submitting} variant="contained" color="primary"
                            fullWidth={true}>
                        Submit
                    </Button>
                </Row>
                <Row>
                    <Button type="button" disabled={pristine || submitting} onClick={reset} variant="contained"
                            color="primary" fullWidth={true}>
                        Clear Values
                    </Button>
                </Row>
            </Container>
        </form>
    )
}

export default reduxForm({
    form: 'loginForm',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    //warn                     // <--- warning function given to redux-form
})(LoginForm)

