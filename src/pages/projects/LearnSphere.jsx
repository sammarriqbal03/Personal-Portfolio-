import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectHero from '../../components/project-sections/ProjectHero'
import OverviewSection from '../../components/project-sections/OverviewSection'
import ProcessSection from '../../components/project-sections/ProcessSection'
import { projects } from '../../data/projects'

function LearnSphere() {
  const project = projects.find((p) => p.id === 'learnsphere')

  if (!project) {
    return <div className="text-center py-20">Project not found</div>
  }

  const overview =
    "LearnSphere is a full-stack e-learning platform where students can browse courses, track progress, and manage their learning journey."

  const features = [
    "User authentication",
    "Course browsing",
    "Dashboard tracking",
    "Responsive UI",
    "Admin panel",
  ]

  const processSteps = [
    {
      title: "Planning",
      description: "Wireframes and structure design",
    },
    {
      title: "Backend",
      description: "Node.js + MongoDB APIs",
    },
    {
      title: "Frontend",
      description: "React + Tailwind UI",
    },
    {
      title: "Deployment",
      description: "Vercel + Render deployment",
    },
  ]

  return (
    <div className="bg-white">
      <Navbar />
      <ProjectHero project={project} />

      <OverviewSection
        heroImage={project.thumbnail}
        overview={overview}
        features={features}
      />

      <ProcessSection steps={processSteps} />

      <Footer />
    </div>
  )
}

export default LearnSphere