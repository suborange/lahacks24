// Footer
import React from 'react';
import Link from "next/link"; // to use link component, which should reload this component instead of the whole page.
import styles from './Footer.module.css';


const Footer = () => {
    return (
        <>
        <div className={styles.mainFooter}>
            <div className={styles.Footer}>
                <div className={[styles.section, styles.logo].join(" ")}>4Give</div>
                <div className={styles.section}>About</div>
                <div className={styles.section}>Support</div>
                <div className={styles.section}>Careers
                <Link href="/search" className={styles.link}>Search</Link> </div>
               
            </div>
        </div>
        </>
    );
}

export default Footer;