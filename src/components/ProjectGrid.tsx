import { useMemo, useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  image?: string
  tech: string[]
  link?: string
  github?: string
}

type Props = {
  projects: Project[]
}

export default function ProjectGrid({ projects }: Props) {
  const [query, setQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [sortMode, setSortMode] = useState<'relevance'|'alpha'>('relevance')

  const allTech = useMemo(() => {
    const set = new Set<string>()
    projects.forEach(p => p.tech.forEach(t => set.add(t)))
    return Array.from(set).sort((a,b) => a.localeCompare(b))
  }, [projects])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = projects.filter(p => {
      const textMatch = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      const techMatch = !selectedTech || p.tech.includes(selectedTech)
      return textMatch && techMatch
    })

    if (sortMode === 'alpha') {
      list = list.slice().sort((a,b) => a.title.localeCompare(b.title))
    } else if (sortMode === 'relevance' && selectedTech) {

      list = list.slice().sort((a,b) => {
        const aHas = a.tech.includes(selectedTech) ? 1 : 0
        const bHas = b.tech.includes(selectedTech) ? 1 : 0
        return bHas - aHas
      })
    }

    return list
  }, [projects, query, selectedTech, sortMode])

  return (
    <section className="mt-10">
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

        <div className="flex gap-2 items-center text-sm">
          <label htmlFor="tech-filter" className="text-[#C0C0C0]">Filter:</label>
          <div className="max-w-[60vw]">
            <select
              id="tech-filter"
              aria-label="Filter projects by technology"
              value={selectedTech ?? ''}
              onChange={(e) => setSelectedTech(e.target.value ? e.target.value : null)}
              className="px-3 py-2 bg-[#1A1A1A] border border-[#212121] rounded text-sm text-[#C0C0C0]"
            >
              <option value="">All</option>
              {allTech.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
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
