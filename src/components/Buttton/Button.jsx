import styles from './Button.module.scss';

const Button = ({ text, dark }) => {
    return (
        <>
            <button
                className={`${styles.button} ${dark && styles['button--dark']}`}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
