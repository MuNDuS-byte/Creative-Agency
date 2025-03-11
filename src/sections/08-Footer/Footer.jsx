import Logo from '../../components/Logo/Logo';
import { LuFacebook } from 'react-icons/lu';
import { LuInstagram } from 'react-icons/lu';
import { LuLinkedin } from 'react-icons/lu';
import { MdOutlineMail } from 'react-icons/md';
import { LuTwitter } from 'react-icons/lu';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__content}>
                    <div className={styles.footer__logo}>
                        <Logo />
                    </div>

                    <div className={styles.footer__information}>
                        <ul className={styles.footer__list}>
                            <li className={styles.footer__listItemSpecial}>
                                Terms & policies
                            </li>
                            <li className={styles.footer__listItem}>
                                Terms of Service
                            </li>
                            <li className={styles.footer__listItem}>
                                Privacy Policy
                            </li>
                        </ul>

                        <ul className={styles.footer__list}>
                            <li className={styles.footer__listItemSpecial}>
                                Company
                            </li>
                            <li className={styles.footer__listItem}>Home</li>
                            <li className={styles.footer__listItem}>
                                About us
                            </li>
                            <li className={styles.footer__listItem}>
                                Contact us
                            </li>
                        </ul>

                        <ul className={styles.footer__list}>
                            <li className={styles.footer__listItemSpecial}>
                                Contact
                            </li>
                            <li className={styles.footer__listItem}>
                                (+62) 893912392190
                            </li>
                            <li className={styles.footer__listItem}>
                                agecnycr@gmail.com
                            </li>
                        </ul>

                        <ul className={styles.footer__list}>
                            <li className={styles.footer__listItemSpecial}>
                                Location
                            </li>

                            <li className={styles.footer__listItem}>
                                PT Osiris Real Estate Internasional
                            </li>

                            <li className={styles.footer__listItem}>
                                Jl. KH. Wahid Hasyim Kel No.10D
                            </li>

                            <li className={styles.footer__listItem}>
                                Jakarta, Indonesia
                            </li>

                            <li className={styles.footer__listItem}>
                                team@OsirisRealEstate.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <div className={styles.icons}>
                        <div className={styles.ellipse}>
                            <LuFacebook className={styles.icon} />
                        </div>
                        <div className={styles.ellipse}>
                            <LuInstagram className={styles.icon} />
                        </div>
                        <div className={styles.ellipse}>
                            <LuLinkedin className={styles.icon} />
                        </div>
                        <div className={styles.ellipse}>
                            <MdOutlineMail className={styles.icon} />
                        </div>
                        <div className={styles.ellipse}>
                            <LuTwitter className={styles.icon} />
                        </div>
                    </div>

                    <div className={styles.footer__line}></div>
                    <p>Copyright @ 2022 Agency Creative. All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
