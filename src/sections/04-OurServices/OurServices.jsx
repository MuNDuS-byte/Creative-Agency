import Card from './Card/Card';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import styles from './OurServices.module.scss';

const OurServices = () => {
    return (
        <div className={styles.services}>
            <div className="container">
                <div className={styles.services__content}>
                    {/* Text */}
                    <div className={styles.services__info}>
                        <h3>Our Services</h3>
                        <h2>Perfect and Fast Movement</h2>
                        <p>
                            {' '}
                            We move with make a Creative Strategy for help your
                            business goal, we help to improve your income by a
                            services we have. make your content look interesting
                            and make people look for your business
                        </p>
                        <a href="#" className={styles.services__button}>
                            Read more <img src={ArrowRight} alt="Arrow right" />
                        </a>
                    </div>

                    {/* Card */}
                    <div className={styles.Card__wrapper}>
                        <Card
                            color="blue"
                            text="Social Media Management"
                            boxShadow
                        />
                        <Card color="red" text="Search Engine Opimization" />

                        <Card color="green" text="Design" />
                        <Card color="yellow" text="Ads" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
