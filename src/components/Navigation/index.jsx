import styles from './navigation.module.css'


const Navigation = ({display}) => {
 
    return(
        <nav className={styles.nav}>
            <button className={styles.button} onClick={()=>display("home")}>Home</button>
            <button className={styles.button} onClick={()=>display("cat")}>Cat</button>
            <button className={styles.button} onClick={()=>display("dog")}>Dog</button>
        </nav>
    )
}

export default Navigation