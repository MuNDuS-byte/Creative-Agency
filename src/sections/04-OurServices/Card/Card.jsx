import {
    servicesMonitor,
    servicesPenTool,
    servicesSetting,
    servicesTv,
} from '../../../assets/images/index';
import styles from './Card.module.scss';

const Card = ({ color, text, boxShadow }) => {
    const imageSrc =
        color === 'blue'
            ? servicesMonitor
            : color === 'red'
            ? servicesSetting
            : color === 'green'
            ? servicesPenTool
            : servicesTv; // Если цвет не указан, то по умолчанию servicesTv

    return (
        <div className={`${styles.card} ${boxShadow ? styles.boxShadow : ''}`}>
            <div className={`${styles.imageWrapper} ${styles[color]}`}>
                <img src={imageSrc} alt="Icon" />
            </div>
            <h3>{text}</h3>
        </div>
    );
};

export default Card;
