// HeaderText
import React from 'react';
import styles from './HeaderText.module.css';

const HeaderText = () => {
    return (
        <div className={styles.text}>Sign up now for free! 4.give/<span className={styles.halfOp}>you</span></div>
    );
}

export default HeaderText;