import styles from './Buttons.module.css';

const Buttons = ({resetFilterAndSearch, filter, onClick}) => {
  const filters = ['Brazil', 'Kenya', 'Columbia'];

  return (
    <div className={styles.btn_flex}>
      <button
        className={`${styles.btn} ${filter === '' ? styles.active : ''}`} 
        onClick={() => resetFilterAndSearch(resetFilterAndSearch)}>
          All
      </button>
      {filters.map((filterValue) => (
        <button
          className={`${styles.btn} ${filter === filterValue ? styles.active : ''}`}
          key={filterValue}
          onClick={() => onClick(filterValue)}>
            {filterValue}
        </button>
      ))}
    </div>
  );
};

export default Buttons;