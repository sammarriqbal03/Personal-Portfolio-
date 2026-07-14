function ProcessSection({ steps }) {
  return (
    <section className="py-16 px-4 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">

        {/* SECTION TITLE */}
        <p className="font-mono text-[#6366F1] text-sm mb-3">
        
        </p>

        <h2 className="font-display text-[#0B0F1A] text-2xl md:text-3xl font-bold mb-10">
          How It Was Built
        </h2>

        {/* STEPS */}
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-5">

              {/* LEFT - NUMBER + LINE */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#0B0F1A] text-white flex items-center justify-center text-sm font-mono shrink-0">
                  {index + 1}
                </div>

                {index !== steps.length - 1 && (
                  <div className="w-px flex-1 bg-gray-300 mt-2"></div>
                )}
              </div>

              {/* RIGHT - CONTENT */}
              <div className="pb-6">
                <h3 className="text-[#0B0F1A] font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProcessSection;