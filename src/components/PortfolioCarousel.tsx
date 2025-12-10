import Carousel from './carousel'
import data from '../assets/data.json'
import styles from '../assets/Carousel.module.css'
export function PortfolioCarousel() {
  var featuredProjects= data.projects;
  return (
    <section className={`${styles.whole} w-full`}>
      <div className=" mx-auto">


        <Carousel intervalMs={4000}>
          {featuredProjects.slice(0, 3).map((project) => (
            <div key={project.id} className={` grid md:grid-cols-2 bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#912DE1]/30 hover:border-[#A133D7] transition-all`}>
                  {/* Image Side */}
                  <div className={`${styles.carouselImg} relative h-80 md:h-auto overflow-hidden`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="mb-4 text-[#FFCE01]">
                      {project.title}
                    </h3>
                    <p className="text-[#C0C0C0] mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[#912DE1]/20 border border-[#912DE1]/50 rounded text-[#D3D3D3]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.link}
                        className="flex items-center gap-2 px-6 py-3 bg-[#912DE1] hover:bg-[#A133D7] text-white rounded transition-all">
                        <span aria-hidden className="w-4 h-4 inline-block">🔗</span>
                        View Live
                      </a>
                      <a 
                        href={project.github}
                        className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] border border-[#00DEDE] hover:bg-[#00DEDE]/10 text-white rounded transition-all">
                        <span aria-hidden className="w-4 h-4 inline-block">💻</span>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
          ))}
        </Carousel>
        
      </div>
    </section>
  );
}
