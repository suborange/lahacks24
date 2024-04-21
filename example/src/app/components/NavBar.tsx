"use client"
// NavBar
import React from 'react';
import NavLink from "next/link"; // to use link component, which should reload this component instead of the whole page.
import styles from './NavBar.module.css';
import { usePathname } from 'next/navigation';


const NavBar = () => {

    const pathname = usePathname();
    return (
        <>
        <nav className={styles.mainNav}>
            <div className={styles.navbar}>
                <NavLink href="/Search" className={pathname == "/Search" ? styles.linkActive : styles.link }>Search</NavLink>
                <NavLink href="/Explore" className={pathname == "/Explore" ? styles.linkActive : styles.link }>Explore</NavLink>
                <NavLink href="/" className={[styles.logo, pathname == "/" ? styles.linkActive: styles.link].join(" ")}>4Give</NavLink>
                <NavLink href="/About" className={pathname == "/About" ? styles.linkActive : styles.link }>About</NavLink>
                <NavLink href="/Start" className={pathname == "/Start" ? styles.linkActive : styles.link }>Start</NavLink>
            </div>
        </nav>
        </>
    );
}

export default NavBar;