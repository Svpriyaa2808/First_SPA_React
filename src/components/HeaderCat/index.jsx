import styles from './headerCat.module.css'
import Catlogo from '../../assets/cat-logo.svg'

const HeaderCat = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}><img src={Catlogo}></img></div>
            <h1 className={styles.title}>It's Meow..</h1>
        </header>
    )
}

export default HeaderCat