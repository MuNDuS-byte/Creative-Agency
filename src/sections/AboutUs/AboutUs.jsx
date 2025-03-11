import Button from '../../components/Button/Button'
import styles from './AboutUs.module.scss'
import { heroEllipseRed, aboutImage } from '../../assets/images/index'

const AboutUs = () => {
    return (
        <section className={styles.about}>
            <h3>About Us</h3>
            <h2>Our Teammate</h2>
            <div className="container">
                <div className={styles.about__content}>
                    <div className={styles.about__images}>
                        <img
                            src={heroEllipseRed}
                            alt="group-ellipses"
                            className={styles.ellipesesGroup}
                        />
                        <img
                            src={aboutImage}
                            alt="image"
                            className={styles.mainImage}
                        />
                    </div>
                    <div className={styles.about__info}>
                        <p>
                            {' '}
                            We move with make a Creative Strategy for help your
                            business goal, we help to improve your income by a
                            services we have. make your content look interesting
                            and make people look for your business
                        </p>
                        <p>
                            {' '}
                            We move with make a Creative Strategy for help your
                            business goal, we help to improve your income by a
                            services we have. make your content look interesting
                            and make people look for your business
                        </p>
                        <div className={styles.about__buttons}>
                            <Button text="About Us" dark />
                            <Button text="Our Story " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
