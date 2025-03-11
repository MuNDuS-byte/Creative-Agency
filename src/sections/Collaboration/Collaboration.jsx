import Button from '../../components/Button/Button'
import {
    collaborationFirstImage,
    collaborationSecondImage,
} from '../../assets/images/index'
import styles from './Collaboration.module.scss'

const Collaboration = () => {
    return (
        <div className={styles.collaboration}>
            <div className="container">
                <div className={styles.collaboration__content}>
                    <div className={styles.collaboration__paragraph}>
                        <h2>Interesting Collaboration With Us?</h2>
                        <p>Help you to reach your business goal</p>
                        <Button text="Get Started" dark />
                    </div>

                    <div className={styles.imageWrapper}>
                        <img src={collaborationFirstImage} alt="image" />
                        <img
                            src={collaborationSecondImage}
                            alt="image"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaboration
