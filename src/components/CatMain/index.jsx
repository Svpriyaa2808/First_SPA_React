import CatImage from '../CatImage'
import styles from './catmain.module.css'

const CatMain = () => {
    return(
        <>
        <div className={styles.main}>
            <div className={styles.cat_main}>
                <p>Cats are independent, curious, and affectionate pets. They live 12-18 years, love sleeping, and are obligate carnivores. Popular breeds include Persian, Siamese, and Maine Coon.
                    Cats communicate through purring, meowing, and body language. </p>
                <h4>Fun Facts about Cats</h4>
                <ul>
                    <li> Cats can rotate their ears 180 degrees!</li>
                    <li>A cat's nose print is unique, just like a human fingerprint.</li>
                    <li>They spend about 70% of their lives sleeping.</li>
                    <li>The world's oldest known pet cat lived around 9,500 years ago!</li>
                </ul>
            
            </div>
            <CatImage />
        </div>
        
        </>
    )
}

export default CatMain