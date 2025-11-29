export default function PlainResume() {
  function handlePrint() {
    // print stylesheet hides .no-print items, so simply call print()
    window.print()
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <nav className="flex items-center justify-between mb-6 no-print">
        <h1 className="text-3xl font-semibold">Zach Watson</h1>
        <div className="flex gap-2 items-center">
          <a id="toMain" className="text-sm underline text-blue-600" href="#main">Main Resume</a>
          <button id="print-plain" className="print-plain no-print border px-3 py-1 rounded-md" onClick={handlePrint}>Print Resume</button>
        </div>
      </nav>

      <section className="mb-4 text-sm">
        <p>Austin, TX | (512) 555-0193 | zach.watson@email.com — <a href="https://www.linkedin.com/in/zach-w-133415383/" target="_blank" className="underline text-blue-600">LinkedIn</a> • <a href="https://github.com/Hypobeggar" target="_blank" className="underline text-blue-600">GitHub</a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Professional Summary</h2>
        <p className="text-sm mt-2">Creative and detail-oriented Web Developer with 4+ years of experience designing, building, and optimizing responsive websites and web applications.</p>
      </section>

      <main id="container" className="grid md:grid-cols-2 gap-6">
        <section className="resumeInfo">
          <h2 className="text-lg font-semibold">Technical Skills</h2>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li>JavaScript (ES6+), HTML5, CSS3, Python, SQL</li>
            <li>React, Node.js, Express.js, Tailwind CSS</li>
            <li>Git, GitHub, VS Code, Figma, Firebase, REST APIs</li>
          </ul>
        </section>

        <section className="resumeInfo">
          <h2 className="text-lg font-semibold">Education</h2>
          <h3 className="font-bold">Bachelor of Science in Computer Science — University of Texas at Austin</h3>
          <p className="text-xs text-gray-600">August 2017 – May 2021 | Austin, TX</p>
        </section>

        <section className="resumeInfo">
          <h2 className="text-lg font-semibold">Professional Experience</h2>
          <h3 className="font-bold">Front-End Web Developer — Creative Spark Digital Agency</h3>
          <p className="text-xs text-gray-600">March 2022 – Present</p>
        </section>

        <section className="resumeInfo">
          <h2 className="text-lg font-semibold">Projects</h2>
          <h3 className="font-bold">Portfolio Website — <a href="https://zachwatson.dev" target="_blank" className="underline text-blue-600">zachwatson.dev</a></h3>
        </section>
      </main>
    </div>
  )
}
