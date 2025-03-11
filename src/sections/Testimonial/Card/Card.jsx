import { testimonialEllipses } from '../../../assets/images/index'
import styles from './Card.module.scss'

const Card = ({ mobile }) => {
    return (
        <div className={`${styles.card} ${mobile && styles.mobile}`}>
            <div className={styles.card__header}>
                <img src={testimonialEllipses} alt="ellipses" />
                <div>
                    <h3>Angel Rose</h3>
                    <h5>Creative Manager</h5>
                </div>
            </div>
            <p className={styles.card__paragraph}>
                There are many variations passages of Lorem Ipsum majority some
                by words which don&#39;t look
            </p>
        </div>
    )
}

export default Card
