// NavBar
import React from 'react';
import Link from "next/link"; // to use link component, which should reload this component instead of the whole page.
import styles from './NavBar.module.css';




const NavBar = () => {
    return (
        //  <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
        <>
        <div className={styles.mainNav}>
            <div className={styles.navbar}>
                <Link href="/search" className={styles.link}>Search</Link>
                <Link href="/explore" className={styles.link}>Explore</Link>
                <Link href="/" className={[styles.logo, styles.link].join(" ")}>4Give</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/start" className={styles.link}>Start</Link>
            </div>
        </div>
        </>
    );
}

export default NavBar;