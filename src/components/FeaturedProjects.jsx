import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="py-24 px-6 bg-[#F7F8FC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[#0B0F1A] text-3xl md:text-5xl font-bold text-center mb-16">
           Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
  src={project.thumbnail}
  alt={project.title}
  className="w-full h-52 object-cover object-top"
/>
              <div className="p-6">
                <h3 className="text-[#0B0F1A] text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={project.route} className="text-[#6366F1] text-sm font-medium hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block border border-[#6366F1] text-[#6366F1] px-6 py-3 rounded-lg font-medium hover:bg-[#6366F1] hover:text-white transition"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects