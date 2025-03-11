import Button from '../../components/Buttton/Button';
import portfolioBigImage from '../../assets/images/portfolioBigImage.png';
import portfolioSmallLeftImage from '../../assets/images/portfolioSmallLeftImage.png';
import portfolioSmallRightImage from '../../assets/images/portfolioSmallRightImage.png';
import portfolioEllipses from '../../assets/images/portfolioEllipses.png';
import styles from './OurPortfolio.module.scss';

const OurPortfolio = () => {
    return (
        <div className={styles.portfolio}>
            <div className="container">
                <h3>Our Portfolio</h3>
                <h2>What do we do</h2>
                <p>
                    all projects that we have already done , proven can help to
                    use more comfortable, then can used by client from our
                    business
                </p>
                <img
                    className={styles.portfolio__ellipses}
                    src={portfolioEllipses}
                    alt="Ellipses"
                />
                <div className={styles.portfolio__content}>
                    <div className={styles.imageWrapper}>
                        <img src={portfolioSmallLeftImage} alt="portfolio" />
                        <h4 className={styles.imageText}>Design Byte App</h4>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img src={portfolioBigImage} alt="portfolio" />
                        <h4 className={styles.imageText}>Cloud App</h4>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img src={portfolioSmallRightImage} alt="portfolio" />
                        <h4 className={styles.imageText}>
                            Design Furniture App
                        </h4>
                    </div>
                </div>

                <div className={styles.portfolio__button}>
                    <Button text="See All Portfolio" />
                </div>
            </div>
        </div>
    );
};

export default OurPortfolio;
