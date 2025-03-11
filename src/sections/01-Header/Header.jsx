import { useState } from 'react';
import styles from './Header.module.scss';
import Button from '../../components/Buttton/Button';
import Logo from '../../components/Logo/Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <div>
                        <Logo />
                    </div>

                    {/* Десктоп-меню */}
                    <nav
                        className={`${styles.menu} ${
                            isOpen && styles.menu_open
                        }`}
                    >
                        <ul className={styles.menu__list}>
                            <li>
                                <a href="/" className={styles.menu__link}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className={styles.menu__link}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className={styles.menu__link}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className={styles.menu__link}
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button
                        className={styles.burger}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>

                    <div className={styles.header__button}>
                        <Button text="Contact us" />
                    </div>

                    {/* Мобильное меню */}
                    <nav
                        className={`${styles.menu_mobile} ${
                            isOpen ? styles.menu_open : ''
                        }`}
                    >
                        <button
                            className={styles.menu_mobile__close}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        >
                            ✖
                        </button>
                        <ul className={styles.menu_mobile__list}>
                            <li>
                                <a
                                    href="#"
                                    className={styles.menu_mobile__link}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={styles.menu_mobile__link}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={styles.menu_mobile__link}
                                >
                                    Services
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
