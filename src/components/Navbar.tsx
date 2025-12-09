import {Link } from "react-router";
import styles from '../assets/Navbar.module.css'

export default function Navbar (){
    return (
    <nav className={styles.navbar}>
        <h1><Link to="/">Zach Watson</Link></h1>
        <div className='flex gap-3 '>
            <Link className={styles.links} to="/">Home</Link>
            <Link className={styles.links} to="/portfolio">Portfolio</Link>
            <Link className={styles.links} to="/plain">Plain Resume</Link>
        </div>
    </nav>
    )
}