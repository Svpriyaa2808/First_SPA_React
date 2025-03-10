import styles from './home.module.css'

const Home = ({currentPage}) => { 
    return(
        <>
        <div className={styles.main}>
        <div className={styles.container}>
            <p>Click to know about</p>
            <button className={styles.button} onClick={()=>currentPage("cat")}>Cat</button>
            <button className={styles.button} onClick={()=>currentPage("dog")}>Dog</button>
        </div>
        </div>
        </>
    )
}

export default Home