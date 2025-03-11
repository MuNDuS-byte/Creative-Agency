// import styles from './Hero.module.scss';
// import {
//     heroImg,
//     heroElipsesBlue,
//     heroElipsesRed,
//     heroAvatar,
// } from '../../assets/images';
// import Star from '../../assets/icons/Star.svg';
// import Button from '../../components/Buttton/Button';

// const Hero = () => {
//     return (
//         <div className={styles.hero}>
//             <div className={styles.hero__content}>
//                 {/* Начальный текст */}
//                 <div className={styles.hero__startText}>
//                     <div className={styles.elipseBlueZero}></div>
//                     <div>
//                         <h1>Make your dream business goal come true</h1>

//                         <h4>
//                             when you need us for improve your business, then
//                             come with us to help your business have reach it,
//                             you just sit and feel that goal
//                         </h4>
//                         <Button text={'Start Project'} dark />
//                     </div>
//                     <div className={styles.elipseRedZero}></div>
//                 </div>

//                 {/* Обернул изображения в flex-контейнер */}
//                 <div className={styles.hero__images}>
//                     {/* Верхние Отзывы */}
//                     <div
//                         className={`${styles.hero__review} ${styles['hero__review--top']}`}
//                     >
//                         <div className={styles.avatar}>
//                             <img src={Star} alt="start" />
//                             <p>Great Project</p>
//                         </div>
//                         <h5>
//                             <span>800+</span> Done
//                         </h5>
//                     </div>
//                     <div className={styles.elipseRedOne}></div>

//                     {/* Верхние элипсы */}
//                     <img
//                         src={heroElipsesBlue}
//                         alt="elipses blue"
//                         className={`${styles.hero__ellipses} ${styles['hero__ellipses--top']}`}
//                     />

//                     {/* Главное изоброжение */}
//                     <img
//                         src={heroImg}
//                         alt="hero-img"
//                         className={styles.hero__mainImg}
//                     />

//                     {/* Нижние элипсы */}
//                     <img
//                         src={heroElipsesRed}
//                         alt="elipses red"
//                         className={`${styles.hero__ellipses} ${styles['hero__ellipses--bottom']}`}
//                     />
//                     <div className={styles.elipseBlueOne}></div>
//                     {/* Нижние Отзывы */}
//                     <div
//                         className={`${styles.hero__review} ${styles['hero__review--bottom']}`}
//                     >
//                         <div className={styles.avatar}>
//                             <img src={heroAvatar} alt="avatar" />
//                             <div>
//                                 <h5>Bill Adams</h5>
//                                 <small>CEO UpTech</small>
//                             </div>
//                         </div>
//                         <p>
//                             “ This team is really the best in its field,I don't
//                             regret working with them, and will come back again
//                             thanks “
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

import styles from './Hero.module.scss';
import {
    heroImage,
    heroEllipseBlue,
    heroEllipseRed,
    reviewerAvatar,
} from '../../assets/images';
import Star from '../../assets/icons/Star.svg';
import Button from '../../components/Buttton/Button';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                {/* Заголовок и текст */}
                <div className={styles.hero__startText}>
                    <div className={styles.elipseBlueZero}></div>
                    <div>
                        <h1>Make your dream business goal come true</h1>
                        <h4>
                            When you need us to improve your business, we’re
                            here to help you achieve that goal. You just sit
                            back and watch it happen.
                        </h4>
                        <Button text="Start Project" dark />
                    </div>
                    <div className={styles.elipseRedZero}></div>
                </div>

                {/* Блок с изображениями */}
                <div className={styles.hero__images}>
                    {/* Верхний отзыв */}
                    <div
                        className={`${styles.hero__review} ${styles.hero__reviewTop}`}
                    >
                        <div className={styles.avatar}>
                            <img src={Star} alt="star icon" />
                            <p>Great Project</p>
                        </div>
                        <h5>
                            <span>800+</span> Done
                        </h5>
                    </div>
                    <div className={styles.elipseRedOne}></div>

                    {/* Верхние эллипсы */}
                    <img
                        src={heroEllipseBlue}
                        alt="blue ellipses"
                        className={styles.hero__ellipsesTop}
                    />

                    {/* Главное изображение */}
                    <img
                        src={heroImage}
                        alt="hero"
                        className={styles.hero__mainImg}
                    />

                    {/* Нижние эллипсы */}
                    <img
                        src={heroEllipseRed}
                        alt="red ellipses"
                        className={styles.hero__ellipsesBottom}
                    />
                    <div className={styles.elipseBlueOne}></div>

                    {/* Нижний отзыв */}
                    <div
                        className={`${styles.hero__review} ${styles.hero__reviewBottom}`}
                    >
                        <div className={styles.avatar}>
                            <img src={reviewerAvatar} alt="avatar" />
                            <div>
                                <h5>Bill Adams</h5>
                                <small>CEO UpTech</small>
                            </div>
                        </div>
                        <p>
                            “ This team is really the best in its field. I don't
                            regret working with them and will come back again,
                            thanks. “
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
