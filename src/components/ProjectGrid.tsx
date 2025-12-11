import { useMemo, useState } from 'react'
import data from '../assets/data.json'

export default function ProjectGrid() {
  const [query, setQuery] = useState('')
  const [selectedTechs, setSelectedTechs] = useState<Set<string>>(new Set())
  const [sortMode, setSortMode] = useState<'relevance'|'alpha'>('relevance')

  var projects= data.projects;

  const allTech = useMemo(() => {
    const set = new Set<string>()
    projects.forEach(p => p.tech.forEach(t => set.add(t)))
    return Array.from(set).sort((a,b) => a.localeCompare(b))
  }, [projects])

  const toggleTech = (tech: string) => {
    const newSet = new Set(selectedTechs)
    if (newSet.has(tech)) {
      newSet.delete(tech)
    } else {
      newSet.add(tech)
    }
    setSelectedTechs(newSet)
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = projects.filter(p => {
      const textMatch = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      const techMatch = selectedTechs.size === 0 || p.tech.some(t => selectedTechs.has(t))
      return textMatch && techMatch
    })

    if (sortMode === 'alpha') {
      list = list.slice().sort((a,b) => a.title.localeCompare(b.title))
    } else if (sortMode === 'relevance' && selectedTechs.size > 0) {

      list = list.slice().sort((a,b) => {
        const aMatches = a.tech.filter(t => selectedTechs.has(t)).length
        const bMatches = b.tech.filter(t => selectedTechs.has(t)).length
        return bMatches - aMatches
      })
    }

    return list
  }, [projects, query, selectedTechs, sortMode])

  return (
    <section className="m-10">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <input
            aria-label="Search projects"
            className="px-3 py-2 bg-[#1A1A1A] border border-[#212121] rounded text-sm text-[#C0C0C0]"
            placeholder="Search title or description"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value as any)}
            className="px-3 py-2 bg-[#1A1A1A] border border-[#212121] rounded text-sm text-[#C0C0C0]"
            aria-label="Sort projects"
          >
            <option value="relevance">Relevance</option>
            <option value="alpha">Alphabetical</option>
          </select>
        </div>
      

      <div className="">
        <p className="text-sm text-[#C0C0C0] mb-3">Filter by technology:</p>
        <div className="grid grid-cols-5 gap-2">
          {allTech.map(tech => (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className={`px-4 py-2 rounded text-sm transition-colors ${
                selectedTechs.has(tech)
                  ? 'bg-[#912DE1] border border-[#912DE1] text-white'
                  : 'bg-[#1A1A1A] border border-[#212121] text-[#C0C0C0] hover:border-[#912DE1]'
              }`}
              aria-pressed={selectedTechs.has(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        {selectedTechs.size > 0 && (
          <button
            onClick={() => setSelectedTechs(new Set())}
            className="mt-3 text-xs text-[#C0C0C0] hover:text-[#00DEDE] transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length === 0 ? (
          <div className="text-sm text-[#C0C0C0]">No projects match your search/filter.</div>
        ) : (
          filtered.map(project => (
            <article key={project.id} className="relative bg-[#1A1A1A] p-6 rounded-lg border border-[#212121] flex gap-4 overflow-hidden">

              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                />
              ) : null}

              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none" />

              <div className="relative flex-1 z-10">
                <h4 className="text-[#FFCE01] font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-[#C0C0C0] mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#912DE1]/20 border border-[#912DE1]/50 rounded text-[#D3D3D3] text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  {project.link && <a href={project.link} className="px-3 py-1 bg-[#912DE1] rounded text-white text-sm">Live</a>}
                  {project.github && <a href={project.github} className="px-3 py-1 border border-[#00DEDE] rounded text-[#00DEDE] text-sm">Code</a>}
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
