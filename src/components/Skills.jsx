const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 88 },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Figma", level: 100 },
      { name: "Vercel / Netlify / Render", level: 100 },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0B0F1A]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[#D4AF37] text-sm text-center mb-3">   </p>
        <h2 className="font-display text-white text-3xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-[#D4AF37] text-sm mb-5 uppercase tracking-wide">
                {group.category}
              </h3>

              <div className="flex flex-col gap-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                      <span className="text-[#8B93A7] text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills