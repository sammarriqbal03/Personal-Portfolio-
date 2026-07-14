import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectHero from '../../components/project-sections/ProjectHero'
import OverviewSection from '../../components/project-sections/OverviewSection'
import ProcessSection from '../../components/project-sections/ProcessSection'
import { projects } from '../../data/projects'

function WebsiteSkinDesign() {
  const project = projects.find((p) => p.id === 'website-skin-design')

  if (!project) {
    return <div className="text-center py-20">Project not found</div>
  }

  const overview =
    "A custom visual skin/theme design for a natural cosmetics website, focused on branding and layout. The design reflects a calm, organic feel with clean navigation, soft green tones, and product-first visuals to build trust and a premium brand presence."

  const features = [
    "Nature-inspired color palette and clean typography",
    "Simple navigation across Home, Category, Blog, and Contact",
    "Product-first hero section with clear call-to-action",
    "Responsive layout for a smooth browsing experience",
    "Consistent visual branding throughout the site",
  ]

  const processSteps = [
    {
      title: "Research & Moodboard",
      description: "Studied cosmetic/skincare brand websites and built a moodboard around a natural, calming aesthetic.",
    },
    {
      title: "Wireframing",
      description: "Sketched the homepage and category structure focused on easy product discovery.",
    },
    {
      title: "UI Design in Figma",
      description: "Designed the final interface with a green nature-themed palette, elegant typography, and product imagery.",
    },
    {
      title: "Refinement",
      description: "Polished spacing, contrast, and button states for a clean, premium finish.",
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

export default WebsiteSkinDesign