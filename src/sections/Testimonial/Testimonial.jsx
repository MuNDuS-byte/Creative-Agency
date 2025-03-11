import Card from './Card/Card'
import styles from './Testimonial.module.scss'
import testimonialGroupEllipses from '../../assets/images/testimonialGroupEllipses.png'

const Testimonial = () => {
    return (
        <section className={styles.testimonial}>
            <img
                className={styles.testimonial__ellipses}
                src={testimonialGroupEllipses}
                alt="Background decorative ellipses"
            />
            <h3>Testimonial</h3>
            <h2>People Talk about us</h2>
            <div className={styles.testimonial__content}>
                <Card mobile={true} />

                <Card />

                <Card mobile={true} />

                <img
                    className={styles.testimonial__ellipsesBottom}
                    src={testimonialGroupEllipses}
                    alt="Background decorative ellipses"
                />
            </div>
        </section>
    )
}

export default Testimonial
