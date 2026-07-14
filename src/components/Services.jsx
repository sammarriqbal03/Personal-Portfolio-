import { FiGlobe, FiSmartphone, FiFigma } from 'react-icons/fi'

const services = [
  {
    icon: <FiGlobe />,
    color: "bg-blue-500",
    title: "Web Development",
    desc: "Full-stack websites and web apps built with the MERN stack — fast, responsive, and production-ready.",
  },
  {
    icon: <FiSmartphone />,
    color: "bg-pink-500",
    title: "Flutter App Development",
    desc: "Cross-platform mobile apps with clean UI, smooth performance, and real backend integration.",
  },
  {
    icon: <FiFigma />,
    color: "bg-emerald-500",
    title: "UI/UX Design",
    desc: "Wireframes to polished interfaces — design that communicates and is a pleasure to use.",
  },
]

function Services() {
  return (
    <section className="bg-white py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <p className="text-[#D4AF37] text-sm font-mono mb-2">
          
        </p>

        <h2 className="text-[#0B0F1A] text-3xl md:text-4xl font-bold mb-10">
          Services Built to Last
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-5`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#0B0F1A] text-xl font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Services