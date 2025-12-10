import ProjectGrid from './components/ProjectGrid'
import Navbar from './components/Navbar'
import {PortfolioCarousel} from './components/PortfolioCarousel'
export default function MainResume() {
    return(
        <div>
            <Navbar/>
            <PortfolioCarousel/>
            <ProjectGrid/>
        </div>
    )}