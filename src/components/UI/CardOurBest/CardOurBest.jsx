import styles from './CardOurBest.module.css'

const CardOurBest = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.info.img} alt="solimo coffee" />
            <p>{props.info.descr}</p>
            <span>{props.info.price}</span>
        </div>
    );
};

export default CardOurBest;