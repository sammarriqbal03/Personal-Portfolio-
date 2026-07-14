function OverviewSection({ project, heroImage, overview, features }) {
  return (
    <section className="py-16 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">

          {/* LEFT SIDE - IMAGE */}
          <div
            className={`w-full h-[420px] rounded-2xl border border-gray-200 mb-14 shadow-lg overflow-hidden flex items-center justify-center ${
              project?.id === 'website-skin-design' ? 'bg-[#3f5645]' : ''
            }`}
          >
            <img
              src={heroImage}
              alt="Project overview"
              className={`w-full h-full ${
                project?.id === 'website-skin-design'
                  ? 'object-contain'
                  : 'object-cover object-top'
              }`}
            />
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div>

            {/* OVERVIEW */}
            <p className="font-mono text-[#6366F1] text-sm mb-3">
             
            </p>

            <h2 className="font-display text-[#0B0F1A] text-2xl md:text-3xl font-bold mb-4">
              About the Project
            </h2>

            <p className="text-gray-500 leading-relaxed mb-6">
              {overview}
            </p>

            {/* FEATURES */}
            <p className="font-mono text-[#6366F1] text-sm mb-3">
              
            </p>

            <div className="grid gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4"
                >
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default OverviewSection;