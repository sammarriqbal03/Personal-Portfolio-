import { Link } from 'react-router-dom'
import { FiArrowLeft, FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi'

function ProjectHero({ project }) {
  return (
    <section className="bg-[#0B0F1A] px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-[#B8C0D6] hover:text-[#D4AF37] mb-6 text-sm"
        >
          <FiArrowLeft /> Back to Projects
        </Link>

        <div>
          {/* CATEGORY */}
          <p className="font-mono text-[#D4AF37] text-sm mb-3">
            {project.category}
          </p>

          {/* TITLE */}
          <h1 className="font-display text-white text-3xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#B8C0D6] max-w-2xl mb-6 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-mono bg-white/5 text-[#B8C0D6] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#D4AF37] text-[#0B0F1A] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#F5D576] transition"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}

            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#D4AF37] text-[#0B0F1A] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#F5D576] transition"
              >
                <FiDownload /> Download APK
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/15 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
              >
                <FiGithub /> GitHub
              </a>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}

export default ProjectHero