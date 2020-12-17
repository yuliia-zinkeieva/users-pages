import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {useDispatch, useSelector} from "react-redux";
import {editCustomerAction} from '../actions/auth';
import {Container, Row} from "react-grid-system";
import Button from "@material-ui/core/Button";
import styles from "../../../mainPages/CreateCustomer/imageDownload.module.scss";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

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
        <h1></h1>
    </div>
)

const CustomerEditForm = (props) => {

    //todo: handle errors properly

    const [file, setFile] = React.useState(null);
    const [image, setImage] = React.useState(null);
    React.useEffect(() => {
        onChangeHandler();
    }, [])

    const customer = useSelector(({auth}) => auth.customer);
    const {handleSubmit, pristine, reset, submitting} = props
    const dispatch = useDispatch();
    const editCallback = ({email, firstname} = {}) => {
        dispatch(editCustomerAction(customer.id, email, firstname, file));
    }
    console.log(props.initialValues, customer)
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
        <form onSubmit={handleSubmit(editCallback)} >
            <Field name="email" type="email" component={renderField} />
            <Field name="firstname" type="text" component={renderField} />
            <Container>
                <Row>
                    <input type="file" name="customers_picture" id="file" onChange={onChangeHandler}
                           accept=".jpg, .jpeg, .png"
                           className={styles.input_file}/>
                    {/*<label htmlFor="file" className={styles.label}><AddAPhotoIcon/> Choose a file</label>*/}
                </Row>
                {file ? <>
                        <label htmlFor="file" className={styles.label}><AddAPhotoIcon/> Choose another file</label>
                        <h3>{file.name} </h3>
                        <img src={image} alt="" id="img" className="img" width='50px' height='50px'/>
                    </>
                    :
                    <><img
                        //todo: connect to server dinamically
                        src={`http://localhost:4000/uploads/${customer.imageLink}`}
                        id="prev"
                        width='50px' height='50px'
                        className="img"
                    /> <label htmlFor="file" className={styles.label}><AddAPhotoIcon/> Choose a new file</label></>}
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
                <Row>
                    <Button href='/' variant="outlined" color="primary" fullWidth={true}>
                        back
                    </Button>
                </Row>
            </Container>
        </form>
    )
}

export default reduxForm({
    form: 'customerEditForm',  // a unique identifier for this form
    validate,
    enableReinitialize : true,// <--- validation function given to redux-form
})(CustomerEditForm)