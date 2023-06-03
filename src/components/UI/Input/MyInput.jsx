import styles from './MyInput.module.css';

const MyInput = ({value, onChange}) => {
    return (
        <>
            <label htmlFor="search">Lookiing for</label>
            <input 
                type="text" 
                name='search'
                id='search' 
                className={styles.search_input}
                placeholder='start typing here'
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default MyInput;