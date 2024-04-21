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
                    {/* About */}
                    <ul className={styles.ulgap}>
                        <li className={styles.title}>About</li>
                        <li><Link href="/Temp" className={styles.link}>About 4Give</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Cookie</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Privacy</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Copyright Policies</Link></li>
                    </ul>
                    {/* Support */}
                    <ul className={styles.ulgap}>
                        <li className={styles.title}>Support</li>
                        <li><Link href="/Temp" className={styles.link}>About 4Give</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Branding</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Help</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Pricing</Link></li>
                    </ul>
                    {/* Careers */}
                    <ul className={styles.ulgap}>
                        <li className={styles.title}>Careers</li>
                        <li><Link href="/Temp" className={styles.link}>Work 4 us</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Suggest improvements</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Open source code</Link></li>
                        <li><Link href="/Temp" className={styles.link}>Open policy</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default Footer;