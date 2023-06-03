import styles from './Divider.module.css'

const Divider = (props) => {
    return (
        <div className={styles.divider} style={props.margin}>
            <div className={styles.line}></div>
            <img src="/images/coffee-beans-black.svg" alt="coffee beans image" />
            <div className={styles.line}></div>
        </div>
    );
};

export default Divider;