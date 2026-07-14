import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Portfolio() {
  return (
    <div className="bg-[#F7F8FC] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <section className="px-6 pt-32 pb-20">
        <p className="font-mono text-[#6366F1] text-sm text-center mb-3">
          
        </p>

        <h1 className="font-display text-[#0B0F1A] text-3xl md:text-5xl font-bold text-center mb-16">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default Portfolio