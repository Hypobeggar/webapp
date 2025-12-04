import { PortfolioCarousel } from './components/PortfolioCarousel'
import styles from './assets/Main.module.css'

import {Link } from "react-router";

export default function MainResume() {
    return(
<div className={styles.container}>
    <nav className={styles.navbar}>
        <h1>Zach Watson</h1>
        <Link to="/plain">Plain Resume</Link>
    </nav>
    <article className={styles.head}>
        <section className={styles.profileSection}>
            <p className='mb-2 mt-2'>Austin, TX | (512) 555-0193 | zach.watson@email.com | 
                <a href="https://www.linkedin.com/in/zach-w-133415383/" target="_blank">LinkedIn</a> | 
                <a href="https://github.com/Hypobeggar" target="_blank">zachwatson.dev</a>
            </p>
        </section>

        <section className={styles.professionalSection}>
            <p  className={styles.statement}>Crafting digital experiences where technology meets design</p>
            <h2>Professional Summary</h2>
            <hr/>
            <p>Creative and detail-oriented Web Developer with 4+ years of experience designing, building, and optimizing responsive websites and web applications. Skilled in both front-end and back-end technologies, with a focus on clean UI, strong UX, and scalable code. Passionate about building modern digital experiences that bridge technology and design.</p>
        </section>
    </article>
    <main className={styles.main}>
        <section>
            <h2>Technical Skills</h2>
            <hr/>
            <ul className={styles.textPadding}>
                <li>Languages: JavaScript (ES6+), HTML5, CSS3, Python, SQL</li>
                <li>Frameworks & Libraries: React, Node.js, Express.js, Tailwind CSS, Bootstrap</li>
                <li>Tools & Platforms: Git, GitHub, VS Code, Figma, Firebase, REST APIs</li>
                <li>Other Skills: Responsive Design, Accessibility, SEO Optimization, Agile Development</li>
            </ul>
        </section>

        <section>
            <h2>Professional Experience</h2>
            <hr/>
            <ul className={styles.experience}>
                <li>
                    <h3>Front-End Web Developer — Creative Spark Digital Agency</h3>
                    <p>March 2022 – Present | Austin, TX</p>
                    <ul className={styles.textPadding}>
                        <li>Developed and maintained responsive websites for 15+ clients using React and Tailwind CSS.</li>
                        <li>Collaborated with UX designers to enhance site accessibility and performance, improving page load speed by 35%.</li>
                        <li>Built dynamic dashboards and data visualization tools using REST APIs and Chart.js.</li>
                        <li>Implemented Git version control and agile workflows to streamline project collaboration.</li>
                    </ul>
                </li>
                <li>
                    <h3>Web Developer Intern — TechWorks Studio</h3>
                    <p>June 2021 – February 2022 | Remote</p>
                    <ul className={styles.textPadding}>
                        <li>Supported development of e-commerce sites using Node.js and MongoDB.</li>
                        <li>Assisted in debugging front-end issues and improving user experience across browsers and devices.</li>
                        <li>Integrated third-party APIs for payment processing and authentication.</li>
                        <li>Contributed to project documentation and user guides.</li>
                    </ul>
                </li>
            </ul>
        </section>
        <div className={styles.flexContainer}>
            <section className={styles.resumeInfo}>
                <h2>Education</h2>
                <hr/>
                <h3>Bachelor of Science in Computer Science — University of Texas at Austin</h3>
                <p>August 2017 – May 2021 | Austin, TX</p>
                <ul className={styles.textPadding}>
                    <li>Coursework: Web Application Development, Data Structures, Database Systems, Human-Computer Interaction</li>
                    <li>Graduated with Honors (GPA: 3.8/4.0)</li>
                </ul>
            </section>

            <section className={styles.resumeInfo}>
                <h2>Certifications</h2>
                <hr/>
                <ul className={styles.textPadding}>
                    <li>Meta Front-End Developer Professional Certificate — Coursera (2024)</li>
                    <li>JavaScript Algorithms and Data Structures — freeCodeCamp (2023)</li>
                </ul>
            </section>

            <section className={styles.resumeInfo}>
                <h2>Awards & Recognition</h2>
                <hr/>
                <ul className={styles.textPadding}>
                    <li>1st Place, HackTX 2020 — Built a “Local Relief Finder” web app for small businesses during COVID-19.</li>
                    <li>Dean’s List, University of Texas (2018–2021)</li>
                </ul>
            </section>

            <section className={styles.resumeInfo}>
                <h2>Volunteer Experience</h2>
                <hr/>
                <h3>Volunteer Web Developer — Austin Coding Alliance</h3>
                <p>January 2023 – Present</p>
                <ul className={styles.textPadding}>
                    <li>Built and maintained a non-profit website promoting free coding workshops for underrepresented communities.</li>
                    <li>Implemented accessibility improvements meeting WCAG 2.1 standards.</li>
                </ul>
            </section>
        </div>
    </main>


    {/* Portfolio */}
    <section className={styles.portfolio}>
      <h2>Portfolio</h2>
      <h3>Featured Projects</h3>
      <PortfolioCarousel/>
    </section>

  </div>
    )
}