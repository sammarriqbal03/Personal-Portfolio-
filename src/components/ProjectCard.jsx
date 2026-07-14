import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

      {/* IMAGE / STATUS */}
      <div className="relative">
        <div
          className={`w-full h-48 flex items-center justify-center overflow-hidden ${
            project.id === 'website-skin-design' ? 'bg-[#3f5645]' : ''
          }`}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className={`w-full h-full ${
              project.id === 'website-skin-design'
                ? 'object-contain'
                : 'object-cover'
            }`}
            style={
              project.id === 'website-skin-design'
                ? {}
                : { objectPosition: project.imagePosition || 'top' }
            }
          />
        </div>

        {project.status && (
          <span className="absolute top-3 left-3 text-xs font-mono bg-black/70 text-white px-3 py-1 rounded-full">
            {project.status}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-2">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-[#0B0F1A] text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-500 text-sm mb-4">
          {project.shortDescription}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* FULLSTACK LINKS */}
        {project.type === "fullstack" && (
          <div className="flex gap-2 mb-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs font-medium bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                🌐 Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs font-medium bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                💻 GitHub
              </a>
            )}
          </div>
        )}

        {/* FLUTTER LINKS */}
        {project.type === "flutter" && (
          <div className="flex gap-2 mb-3">
            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs font-medium bg-emerald-50 text-emerald-600 py-2 rounded-lg hover:bg-emerald-100 transition"
              >
                📱 Download APK
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs font-medium bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                💻 GitHub
              </a>
            )}
          </div>
        )}

        {/* VIEW PROJECT */}
        <Link
          to={project.route}
          className="block text-center bg-[#0B0F1A] text-white font-medium py-2.5 rounded-lg hover:bg-[#131A2B] transition"
        >
          View Project
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard