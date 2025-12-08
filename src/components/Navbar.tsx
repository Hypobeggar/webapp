import {Link } from "react-router";
import styles from '../assets/Main.module.css'

export default function Navbar (){
    return (
            <nav className={styles.navbar}>
        <h1>Zach Watson</h1>
        <Link to="/plain">Plain Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
    </nav>
    )
}