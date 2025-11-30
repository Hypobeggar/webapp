import { useState } from 'react'
import './App.css'
import './assets/app.css'
import PlainResume from './PlainResume.tsx'
import { PortfolioCarousel } from './components/PortfolioCarousel'
import profile from './assets/img/profile.jpg'


function App() {
  const [page, setPage] = useState<'main'|'plain'>('main')


  return (
<div className="bg-black text-gray-300 font-merriweather">
      {/* Navbar */}
      <nav
        id="navbar"
        className="flex justify-between items-center bg-[#1A1A1A] px-8 border-b-2 border-[#212121]"
      >
        <h1 className="text-4xl font-lato text-yellow-500">Zach Watson</h1>
        <button
          onClick={() => setPage('plain')}
          className="px-6 py-4 bg-[#212121] text-gray-300 hover:bg-yellow-500 no-underline"
        >
          Plain Resume
        </button>
      </nav>

      {/* Header (main) */}
      {page === 'main' ? (
      <>
      <article
        id="head"
        className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 m-8 border-2 border-[#212121] rounded-lg overflow-hidden"
      >
        {/* Profile Section */}
        <section
          id="profile-section"
          className="flex flex-col items-center text-center bg-[#1A1A1A] p-4 rounded-lg border-2 border-[#212121]"
        >
          <img id="profile" src={profile} alt="profile" />
          <p className="mt-4">
            Austin, TX | (512) 555-0193 | zach.watson@email.com |{" "}
            <a
              href="https://www.linkedin.com/in/zach-w-133415383/"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500 hover:underline"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Hypobeggar"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500 hover:underline"
            >
              zachwatson.dev
            </a>
          </p>
        </section>

        {/* Professional Summary */}
        <section
          id="professional-section"
          className="bg-[#1A1A1A] p-4 rounded-lg border-2 border-[#212121]"
        >
          <p id="statement" className="text-yellow-500 text-2xl leading-7">
            Crafting digital experiences where technology meets design
          </p>
          <h2 className="font-lato text-yellow-500 text-2xl mt-4">
            Professional Summary
          </h2>
          <hr className="border-[#A133D7] my-2" />
          <p>
            Creative and detail-oriented Web Developer with 4+ years of
            experience designing, building, and optimizing responsive websites
            and web applications. Skilled in both front-end and back-end
            technologies, with a focus on clean UI, strong UX, and scalable
            code. Passionate about building modern digital experiences that
            bridge technology and design.
          </p>
        </section>
      </article>

      {/* Main Content */}
      <main className="flex flex-col gap-8 m-8">
        {/* Technical Skills */}
        <section className="bg-[#1A1A1A] p-4 rounded-lg border-2 border-[#212121]">
          <h2 className="font-lato text-yellow-500 text-2xl">Technical Skills</h2>
          <ul className="text-padding">
            <li>Languages: JavaScript (ES6+), HTML5, CSS3, Python, SQL</li>
            <li>
              Frameworks & Libraries: React, Node.js, Express.js, Tailwind CSS,
              Bootstrap
            </li>
            <li>
              Tools & Platforms: Git, GitHub, VS Code, Figma, Firebase, REST APIs
            </li>
            <li>
              Other Skills: Responsive Design, Accessibility, SEO Optimization,
              Agile Development
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="bg-[#1A1A1A] p-4 rounded-lg border-2 border-[#212121]">
          <h2 className="font-lato text-yellow-500 text-2xl">
            Professional Experience
          </h2>
          <hr className="border-[#A133D7] my-2" />
          <ul id="experience" className="grid lg:grid-cols-2 gap-8">
            <li>
              <h3 className="text-purple-500">
                Front-End Web Developer — Creative Spark Digital Agency
              </h3>
              <p>March 2022 – Present | Austin, TX</p>
              <ul className="text-padding">
                <li>
                  Developed and maintained responsive websites for 15+ clients
                  using React and Tailwind CSS.
                </li>
                <li>
                  Collaborated with UX designers to enhance site accessibility
                  and performance, improving page load speed by 35%.
                </li>
                <li>
                  Built dynamic dashboards and data visualization tools using
                  REST APIs and Chart.js.
                </li>
                <li>
                  Implemented Git version control and agile workflows to
                  streamline project collaboration.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-purple-500">
                Web Developer Intern — TechWorks Studio
              </h3>
              <p>June 2021 – February 2022 | Remote</p>
              <ul className="text-padding">
                <li>
                  Supported development of e-commerce sites using Node.js and
                  MongoDB.
                </li>
                <li>
                  Assisted in debugging front-end issues and improving user
                  experience across browsers and devices.
                </li>
                <li>Integrated third-party APIs for payment processing and authentication.</li>
                <li>Contributed to project documentation and user guides.</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>

      {/* Portfolio */}
      <section id="portfolio" className="m-8">
        <h2 className="font-lato text-yellow-500 text-2xl">Portfolio</h2>
        <h3 className="text-purple-500">Featured Projects</h3>
        <PortfolioCarousel/>
      </section>
      </> ) : (
        <PlainResume onBack={() => setPage('main')} />
      )}
    </div>
  )
}

export default App
