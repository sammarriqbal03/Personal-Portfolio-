import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectHero from '../../components/project-sections/ProjectHero'
import OverviewSection from '../../components/project-sections/OverviewSection'
import ProcessSection from '../../components/project-sections/ProcessSection'
import { projects } from '../../data/projects'

function BankApp() {
  const project = projects.find((p) => p.id === 'bank-app')

  if (!project) {
    return <div className="text-center py-20">Project not found</div>
  }

  const overview =
    "A UI/UX concept for a modern banking app focused on clarity and trust. The design covers everyday transactions — checking balances, transferring money, and viewing statements — with an interface that feels secure and easy to navigate."

  const features = [
    "Clean dashboard with balance and quick actions",
    "Simple, guided money transfer flow",
    "Transaction history with clear categorization",
    "Secure-feeling login and authentication screens",
    "Consistent, accessible visual design system",
  ]

  const processSteps = [
    {
      title: "Research & Wireframing",
      description: "Studied common banking app patterns and sketched low-fidelity wireframes for the core user flows.",
    },
    {
      title: "UI Design in Figma",
      description: "Designed a clean visual system — typography, colors, and components — built for trust and clarity.",
    },
    {
      title: "Prototyping",
      description: "Connected screens into an interactive Figma prototype to test the transfer and balance-check flows.",
    },
    {
      title: "Refinement",
      description: "Refined spacing, contrast, and micro-interactions based on usability review.",
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

export default BankApp