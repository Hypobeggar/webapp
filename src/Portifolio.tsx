import ProjectGrid from './components/ProjectGrid'
import Navbar from './components/Navbar'
import {PortfolioCarousel} from './components/PortfolioCarousel'
import styles from './assets/Portfolio.module.css'
export default function MainResume() {
    return(
        <div className={styles.container}>
            <Navbar/>
            <PortfolioCarousel/>
            <main className={`${styles.main}`}>
                <ProjectGrid/>
            </main>
        </div>
    )}