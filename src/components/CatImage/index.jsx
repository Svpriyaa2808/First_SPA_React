import styles from './catimage.module.css'
import { catImageUrl } from '../../utils/function'
import { CatImage } from '../../data/cat_data'
const CatImages = () => {
    //const CatImageArray = ["src/assets/bengal_cat.jpg","src/assets/mainecoon_cat.jpg","src/assets/persian_cat.jpg","src/assets/siamesecat.jpg"]
    return(
        <div className={styles.cat_image_container}>
            {CatImage.map((item,index)=> <img key= {index} src={catImageUrl(item)} alt={item}></img>)}
           
        </div>
    )
}

export default CatImages