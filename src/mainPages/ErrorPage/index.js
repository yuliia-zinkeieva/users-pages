import React from "react";
import styles from './styles.module.scss'
import Button from "@material-ui/core/Button";

const ErrorPage = () => {
    return (
        <div className={styles.error_page}>
            <div className={styles.page_content}><h2 className={styles.heading}>Error page</h2>
            <h3> {localStorage.getItem('error')} </h3>
            <Button href='/' variant="contained" color="secondary" >
                    RETRY
                </Button></div>

        </div>
    );
}

export default ErrorPage;