import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {useDispatch} from "react-redux";
import {createCustomerAction} from '../actions/auth';
import {Container, Row} from "react-grid-system";
import Button from "@material-ui/core/Button";
import styles from '../../../mainPages/CreateCustomer/imageDownload.module.scss'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

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


const CustomerForm = (props) => {
    const [file, setFile] = React.useState(null);
    const [image, setImage] = React.useState(null);
    React.useEffect(() => {
        onChangeHandler();
    }, [])

    const {handleSubmit, pristine, reset, submitting} = props
    const dispatch = useDispatch();

    const createCallback = ({email, firstname} = {}) => {
        // console.log('call back',file)
        // const data = new FormData()
        // data.append('file', file)
        dispatch(createCustomerAction(email, firstname, file));
    }
    const onChangeHandler = event => {
        if (event === undefined) {
            setFile(null)
            setImage(null)
        } else {
            setFile(event.target.files[0])
            setImage(URL.createObjectURL(event.target.files[0]))
        }
    }


    return (
        <form onSubmit={handleSubmit(createCallback)}>
            <Field name="email" type="email" component={renderField} label="Email of customer"/>
            <Field name="firstname" type="text" component={renderField} label="Firstname of customer"/>

            <Container className={styles.wrapper}>
                <Row>
                    <input type="file" name="customers_picture" id="file" onChange={onChangeHandler}
                           accept=".jpg, .jpeg, .png"
                           className={styles.input_file}/>
                    {/*<label htmlFor="file" className={styles.label}><AddAPhotoIcon/> Choose a file</label>*/}
                </Row>
                {file ? <>
                        <label htmlFor="file" className={styles.label}><AddAPhotoIcon/> Choose another file</label>
                        <h3>{file.name} </h3>
                    <img src={image} alt="" id="img" className="img" width='100px' height='100px' />
                    </>
                    :
                    <><label htmlFor="file" className={styles.label}><AddAPhotoIcon/> Choose a file</label></>}
                <Row>
                    <Button type="submit" disabled={submitting} variant="contained" color="primary"
                            className={styles.form_button}>
                        Submit
                    </Button>
                </Row>
                <Row>
                    <Button type="button" disabled={pristine || submitting} onClick={reset} variant="contained"
                            color="primary" className={styles.form_button}>

                        Clear Values
                    </Button>
                </Row>
                <Row>
                    <Button href='/' variant="outlined" color="primary" className={styles.form_button}>
                        back
                    </Button>
                </Row>

            </Container>
        </form>
    )
}

export default reduxForm({
    form: 'customerForm',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
})(CustomerForm)


