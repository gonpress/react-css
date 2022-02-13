import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.navList}>
            <ul>
                <li>
                    <a href="/">Movies</a>
                </li>
                <li>
                    <a href="/tv">Tv</a>
                </li>
                <li>
                    <a href="/search">Search</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
