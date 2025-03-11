import styles from './Logo.module.scss';
import LogoSvg from '../../assets/icons/Group.svg';

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <div>
                <img src={LogoSvg} alt="logo" />
            </div>
            <div>
                <p className={styles.Logo__big}>Agency</p>
                <p className={styles.Logo__small}>Creative</p>
            </div>
        </div>
    );
};

export default Logo;
