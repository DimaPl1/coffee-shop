import { NavLink } from 'react-router-dom';
import styles from './FilterCard.module.css';


const FilterCard = ({ product, index }) => {
    const { id, title, country, price } = product;


    return (
        <NavLink to={`/our-coffee/${index}`}>
            <article className={styles.card} key={id}>
                <img src="/images/card-coffee-filter.jpg" alt="card coffee image" />
                <div className={styles.title}>{title}</div>
                <p>{country}</p>
                <span>{price}</span>
            </article>
        </NavLink>
    );
};

export default FilterCard;
