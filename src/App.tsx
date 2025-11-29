import { useEffect, useState } from 'react'
import './App.css'
import './assets/app.css'
import PlainResume from './PlainResume.tsx'
import img1 from './assets/img/1.jpeg'
import img2 from './assets/img/2.jpg'
import img3 from './assets/img/3.jpg'
import profile from './assets/img/profile.jpg'

function App() {
  // counter removed — not used by landing resume
  const [page, setPage] = useState<'main'|'plain'>('main')

  const imgs = [img1, img2, img3]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % imgs.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-surface text-foreground">
      <div className="p-6 max-w-6xl mx-auto">
        <header id="navbar" className="flex items-center justify-between mb-6 no-print">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">Zach Watson — Resume</h1>
          </div>
          <div className="flex gap-3">
            <button className={`px-3 py-1 rounded ${page==='main' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={()=>setPage('main')}>Main</button>
            <button className={`px-3 py-1 rounded ${page==='plain' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={()=>setPage('plain')}>Plain</button>
          </div>
        </header>

        {page === 'main' ? (
          <main className="p-6 max-w-5xl mx-auto">
            <nav className="flex items-center justify-between mb-6 no-print">
              <h1 className="text-3xl font-semibold">Zach Watson</h1>
              <a className="text-sm underline text-blue-600" href="#plain">Plain Resume</a>
            </nav>

            <section id="head" className="mb-6 grid md:grid-cols-2 gap-6">
              <div id="profile-section" className="flex gap-4 items-center">
                <img src={profile} alt="profile" className="w-28 h-28 rounded-full object-cover" />
                <div>
                  <p className="text-sm">Austin, TX | (512) 555-0193 | zach.watson@email.com</p>
                  <p className="text-sm">
                    <a className="underline text-blue-600" href="https://www.linkedin.com/in/zach-w-133415383/" target="_blank">LinkedIn</a> • <a className="underline text-blue-600" href="https://github.com/Hypobeggar" target="_blank">zachwatson.dev</a>
                  </p>
                </div>
              </div>

              <div>
                <p id="statement" className="italic text-lg">Crafting digital experiences where technology meets design</p>
                <h2 className="text-xl font-bold mt-3">Professional Summary</h2>
                <hr className="my-2" />
                <p className="text-sm">Creative and detail-oriented Web Developer with 4+ years of experience designing, building, and optimizing responsive websites and web applications.</p>
              </div>
            </section>

            <section id="flex-container" className="space-y-6">
              <h2 className="text-lg font-semibold">Technical Skills</h2>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>JavaScript (ES6+), HTML5, CSS3, Python, SQL</li>
                <li>React, Node.js, Express.js, Tailwind CSS, Bootstrap</li>
                <li>Git, GitHub, VS Code, Figma, Firebase, REST APIs</li>
              </ul>

              <h2 className="text-lg font-semibold">Professional Experience</h2>
              <div className="mt-2 text-sm space-y-4">
                <div>
                  <h3 className="font-bold">Front-End Web Developer — Creative Spark Digital Agency</h3>
                  <p className="text-xs text-gray-600">March 2022 – Present</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Developed responsive websites using React and Tailwind.</li>
                    <li>Improved accessibility and performance across multiple projects.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold">Web Developer Intern — TechWorks Studio</h3>
                  <p className="text-xs text-gray-600">June 2021 – February 2022</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Supported e-commerce sites and assisted in front-end debugging.</li>
                  </ul>
                </div>
              </div>

              <section className="mt-6">
                <h2 className="text-lg font-semibold">Portfolio</h2>
                <div id="carousel" className="mt-2 bg-gray-100 p-4 rounded-md flex items-center justify-center gap-4">
                  <button className="caraButtons no-print" onClick={() => setIndex((i) => (i - 1 + imgs.length) % imgs.length)}>{'<'}</button>
                  <img id="carousel-img" src={imgs[index]} alt="Portfolio" className="max-w-full max-h-64 object-cover rounded" />
                  <button className="caraButtons no-print" onClick={() => setIndex((i) => (i + 1) % imgs.length)}>{'>'}</button>
                </div>
              </section>
            </section>
          </main>
        ) : (
          <PlainResume />
        )}
      </div>
    </div>
  )
}

export default App
