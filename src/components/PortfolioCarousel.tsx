import Carousel from './carousel'
import ProjectGrid from './ProjectGrid'
import img1 from '../assets/img/1.jpeg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import profileImg from '../assets/img/profile.jpg'

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully responsive online shopping experience with real-time inventory management and secure payment processing.",
    image: img1,
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Creative Portfolio App",
    description: "Interactive portfolio showcase with smooth animations and dynamic content loading for artists and designers.",
    image: img2,
    tech: [ "React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative workspace tool with real-time updates, task assignments, and team productivity analytics.",
    image: img3,
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
    github: "#"
  }
  ,
  {
    id: 4,
    title: "Realtime Chat App",
    description: "A highly performant messaging solution with presence, typing indicators, and ephemeral rooms.",
    image: img1,
    tech: ["Tailwind CSS", "Node.js", "React"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description: "Customizable charts and real-time metrics tailored for product and business analytics.",
    image: img2,
    tech: ["TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Static Site Generator",
    description: "A lightning-fast SSG built for blogs and docs using modern compile-to-web tooling.",
    image: img3,
    tech: [ "Angular"],
    link: "#",
    github: "#"
  },
  {
    id: 7,
    title: "DevOps Pipeline",
    description: "A container-driven CI/CD pipeline with automated testing, linting and infrastructure as code.",
    image: profileImg,
    tech: ["React"],
    link: "#",
    github: "#"
  },
  {
    id: 8,
    title: "3D Visualizer",
    description: "Interactive 3D product visualizations and immersive UIs for web-based experiences.",
    image: img2,
    tech: [ "WebGL", "React", "Canvas"],
    link: "#",
    github: "#"
  }
];

export function PortfolioCarousel() {
  return (
    <section className="w-full bg-[#000000] py-20 px-6">
      <div className="max-w-6xl mx-auto">


        <Carousel className="w-full" intervalMs={4000}>
          {featuredProjects.slice(0, 3).map((project) => (
            <div key={project.id} className="grid md:grid-cols-2 gap-8 bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#912DE1]/30 hover:border-[#A133D7] transition-all">
                  {/* Image Side */}
                  <div className="relative h-80 md:h-auto overflow-hidden">
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
        
        {/* Projects grid under the carousel */}
        <ProjectGrid projects={featuredProjects} />
      </div>
    </section>
  );
}
