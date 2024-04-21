// SignUpField
import React from 'react';
import styles from './SignUpField.module.css';

const SignUpField = () => {
    return (
        <>
            <label className={styles.text}>Username:</label> <br/>
            <input className={styles.field}></input>
        </>
    );
}

export default SignUpField;