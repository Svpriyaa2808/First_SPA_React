import styles from './navigation.module.css'

const Navigation = ({currentPage}) => {
    
    return(
        <nav className={styles.nav}>
            <button className={styles.button} onClick={()=>currentPage("home")}>Home</button>
            <button className={styles.button} onClick={()=>currentPage("cat")}>Cat</button>
            <button className={styles.button} onClick={()=>currentPage("dog")}>Dog</button>
        </nav>
    )
}

export default Navigation