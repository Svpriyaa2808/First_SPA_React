import styles from './headerDog.module.css'
import Doglogo from '../../assets/dog-logo.svg'

const HeaderDog = () => {
    return(
        <header className={styles.header}>
        <div className={styles.logo}><img src={Doglogo}></img></div>
            <h1 className={styles.title}>
                Dog
            </h1>
        </header>
    )
}

export default HeaderDog