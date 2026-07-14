import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectHero from '../../components/project-sections/ProjectHero'
import OverviewSection from '../../components/project-sections/OverviewSection'
import ProcessSection from '../../components/project-sections/ProcessSection'
import { projects } from '../../data/projects'

function TaskFlowApp() {
  const project = projects.find((p) => p.id === 'task-flow-app')

  if (!project) {
    return <div className="text-center py-20">Project not found</div>
  }

  const overview =
    "TaskFlow is a full-stack task management app built with React and Firebase. Users can sign up, log in securely, and create, organize, and track their daily tasks with real-time syncing across sessions."

  const features = [
    "Firebase authentication — sign up, login, and secure sessions",
    "Real-time task creation, editing, and deletion",
    "Task categorization and priority sorting",
    "Progress tracking with completion status",
    "Responsive, clean UI built with React and Tailwind",
  ]

  const processSteps = [
    {
      title: "Planning",
      description: "Wireframed the core flows — auth, dashboard, and task management.",
    },
    {
      title: "Authentication",
      description: "Integrated Firebase Authentication for secure signup and login.",
    },
    {
      title: "Frontend Development",
      description: "Built the UI in React with Tailwind CSS, connected to Firebase for real-time data.",
    },
    {
      title: "Deployment",
      description: "Tested across devices and deployed the final build.",
    },
  ]

  return (
    <div className="bg-white">
      <Navbar />
      <ProjectHero project={project} />

      <OverviewSection
        project={project}
        heroImage={project.thumbnail}
        overview={overview}
        features={features}
      />

      <ProcessSection steps={processSteps} />

      <Footer />
    </div>
  )
}

export default TaskFlowApp