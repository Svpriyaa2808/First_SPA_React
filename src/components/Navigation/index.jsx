import styles from './navigation.module.css'
import { useState } from 'react';
import { Squash as Hamburger } from "hamburger-react";
const Navigation = ({currentPage}) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className={styles.nav}>
             <div className="p-4 flex justify-between items-center">
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
</div>
            <button className={styles.button} onClick={()=>currentPage("home")}>Home</button>
            <button className={styles.button} onClick={()=>currentPage("cat")}>Cat</button>
            <button className={styles.button} onClick={()=>currentPage("dog")}>Dog</button>
        </nav>
    )
}

export default Navigation