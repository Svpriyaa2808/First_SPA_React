import styles from './dogmain.module.css'

const DogMain = ({name,lifespan,size,temperament,exercise,coat,good,image}) => {
    return(
        <div className={styles.main}>
        <div className={styles.dog_details} >
            <div className={styles.dog_characteristics}>
            <h3>{name}</h3>
            <ul>
                <li><span>Lifespan: </span> {lifespan} </li>
                <li><span>Size: </span> {size}</li>
                <li><span>Temperament: </span>{temperament} </li>
                <li><span>Exercise Needs: </span>{exercise}</li>
                <li><span>Coat Type: </span> {coat}</li>
                <li><span>Good for:  </span>{good}</li>
            </ul>
            </div>
            <div className={styles.dog_image}>
                <img src={image} alt={name}></img>
            </div>
        </div>
        </div>
    )
}
export default DogMain;