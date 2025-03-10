import { SocialLogo } from "social-logos"
import styles from './footerhome.module.css'
const FooterHome = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.social_icon}>
                    <SocialLogo icon="facebook" size={ 36 } />
                    <SocialLogo icon="instagram" size={ 36 } />
                    <SocialLogo icon="youtube" size={ 36 } />
                </div>
                <p>Copyright 2025</p>
            </div>
        </footer>
    )
}

export default FooterHome