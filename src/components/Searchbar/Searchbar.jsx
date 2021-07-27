import styles from "./Searchbar.module.css";

const Searchbar = ({ onSearch }) => {

    const handleSearch = (e) => {
        e.preventDefault()
        const searchName = e.target.elements.searchName.value;
        onSearch(searchName)
        e.target.elements.searchName.value = ' '
    }
  
    return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={handleSearch}>
                <button type="submit" className={styles.button}>
                    <span className={styles.buttonLabel}>Search</span>
                </button>
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    name="searchName"
                    placeholder="𝚂𝚎𝚊𝚛𝚌𝚑 𝚒𝚖𝚊𝚐𝚎𝚜"
                />
            </form>
        </header>
    )
  }

export default Searchbar