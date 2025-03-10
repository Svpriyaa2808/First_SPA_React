import styles from './catimage.module.css'

const CatImage = () => {
    const CatImageArray = ["src/assets/bengal_cat.jpg","src/assets/mainecoon_cat.jpg","src/assets/persian_cat.jpg","src/assets/siamesecat.jpg"]
    return(
        <div className={styles.cat_image_container}>
            {CatImageArray.map((item,index)=> <img key= {index} src={item}></img>)}
           
        </div>
    )
}

export default CatImage