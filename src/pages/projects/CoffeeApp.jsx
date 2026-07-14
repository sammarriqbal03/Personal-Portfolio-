import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectHero from '../../components/project-sections/ProjectHero'
import OverviewSection from '../../components/project-sections/OverviewSection'
import ProcessSection from '../../components/project-sections/ProcessSection'
import { projects } from '../../data/projects'

function CoffeeApp() {
  const project = projects.find((p) => p.id === 'coffee-app')

  if (!project) {
    return <div className="text-center py-20">Project not found</div>
  }

  const overview =
    "BrewNest is a full-stack Flutter coffee ordering app that brings your favorite brews right to your doorstep. Users can browse a wide range of coffees, customize their order, checkout securely, and track delivery in real time."

  const features = [
    "Wide range of coffees to explore and choose from",
    "Easy customization — size, sugar, ice level and more",
    "Secure checkout with multiple payment options",
    "Real-time order tracking from prep to delivery",
    "Clean, modern, and intuitive user interface",
  ]

  const processSteps = [
    {
      title: "UI/UX Design",
      description: "Designed a warm, coffee-themed interface in Figma focused on quick ordering and easy customization.",
    },
    {
      title: "Flutter Development",
      description: "Built the app in Flutter with Dart, creating smooth screens for browsing, cart, and checkout.",
    },
    {
      title: "Firebase Integration",
      description: "Connected Firebase for authentication, order storage, and real-time order status updates.",
    },
    {
      title: "Testing & Build",
      description: "Tested on real devices, then built and packaged the release APK for distribution.",
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

export default CoffeeApp