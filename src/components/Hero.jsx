import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[#0B0F1A] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono px-4 py-2 rounded-full mb-6">
            Open to New Projects
          </span>

          <h1 className="font-display text-white text-3xl md:text-5xl font-bold mb-2 leading-tight">
            Hey I'm Sammar Iqbal
          </h1>

          <h1 className="text-gradient font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Software Engineer
          </h1>

          <div className="font-mono text-[#8B93A7] text-base md:text-lg mb-8 min-h-[40px]">
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Mobile App Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{
                display: "inline-block",
              }}
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center h-14 w-full sm:w-auto min-w-[220px] px-6 rounded-lg bg-[#D4AF37] text-[#0B0F1A] text-lg font-semibold transition duration-300 hover:bg-[#F5D576]"
            >
              Explore Projects
            </Link>

            <a
              href="/Sammar%20Resume.pdf"
              download="Sammar-Iqbal-Resume.pdf"
              className="inline-flex items-center justify-center h-14 w-full sm:w-auto min-w-[220px] px-6 rounded-lg border border-white/15 text-white text-lg font-semibold transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#131A2B] rounded-xl border border-white/10 overflow-hidden shadow-2xl">

          <div className="flex items-center gap-2 px-4 py-3 bg-[#1B2540] border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-400/70"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
            <span className="w-3 h-3 rounded-full bg-green-400/70"></span>

            <span className="font-mono text-xs text-[#8B93A7] ml-2">
              developer.js
            </span>
          </div>

          <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
            <p>
              <span className="text-[#8B93A7]">const</span>{" "}
              <span className="text-[#D4AF37]">developer</span> = {"{"}
            </p>

            <p className="pl-4">
              name: <span className="text-green-400">'Sammar Iqbal'</span>,
            </p>

            <p className="pl-4">
              role: <span className="text-green-400">'Software Engineer'</span>,
            </p>

            <p className="pl-4">
              stack: [
              <span className="text-green-400">'MERN'</span>,{" "}
              <span className="text-green-400">'Flutter'</span>
              ],
            </p>

            <p className="pl-4">
              focus:{" "}
              <span className="text-green-400">
                'UI/UX + Development'
              </span>,
            </p>

            <p className="pl-4">
              available: <span className="text-[#D4AF37]">true</span>
            </p>

            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;