import React from 'react';
import {Field, reduxForm, values} from 'redux-form';
import {useDispatch, useSelector} from "react-redux";
import {editCustomerAction} from '../actions/auth';
import TextField from "@material-ui/core/TextField";

const validate = values => {
    const errors = {}
    // if (!values.email) {
    //     errors.email = 'Required'
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
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

const CustomerEditForm = (props) => {
    //const customer = {email:'1@gmail.com', name:'vitya'}
    //todo: fetch by id custom + current cust in store
    //todo: auto fill fields
    //todo: css styles
    //todo: handle errors properly
    const customer = useSelector(({auth}) => auth.customer);
    //console.log(customer);
    const {handleSubmit, pristine, reset, submitting} = props
    const dispatch = useDispatch();
    const editCallback = ({email, firstname}={}) => {
        //console.log('values',email, firstname);
        //console.log(props.input);
        dispatch(editCustomerAction(customer.id,email, firstname));
    }
    return (
        <form onSubmit={handleSubmit(editCallback)}>
            <Field name="email" type="email" component={renderField} label={'previous:'+ customer.email}/>
            <Field name="firstname" type="text" component={renderField} label={'previous:'+customer.name}/>
            <div>
                <h1> </h1>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'customerEditForm',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
})(CustomerEditForm)