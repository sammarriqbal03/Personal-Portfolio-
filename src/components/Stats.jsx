const stats = [
  { number: "5+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "7+", label: "Tech Stacks" },
  { number: "1+", label: "Years Experience" },
]

function Stats() {
  return (
    <section className="bg-[#131A2B] border-y border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-gradient font-display text-3xl md:text-4xl font-bold mb-1">
              {stat.number}
            </p>
            <p className="text-[#8B93A7] text-xs md:text-sm uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats