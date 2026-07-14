import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#0B0F1A] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-white text-lg font-bold mb-2">Sammar Iqbal</h3>
          <p className="text-[#8B93A7] text-sm">
            Full Stack Web Developer, Mobile Developer  & UI/UX — building products for clients worldwide.
          </p>
        </div>

        <div>
          <p className="font-mono text-[#D4AF37] text-xs mb-3">SECTIONS</p>
          <div className="flex flex-col gap-2 text-sm text-[#8B93A7]">
            <Link to="/#about" className="hover:text-white transition">About</Link>
            <Link to="/#skills" className="hover:text-white transition">Skills</Link>
            <Link to="/#services" className="hover:text-white transition">Services</Link>
            <Link to="/portfolio" className="hover:text-white transition">Projects</Link>
            <Link to="/#contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        <div>
          <p className="font-mono text-[#D4AF37] text-xs mb-3">CONNECT</p>
          <div className="flex flex-col gap-2 text-sm text-[#8B93A7]">
            <a href="mailto:sammarriqbal03@gmail.com" className="hover:text-white transition">Email</a>
            <a href="https://github.com/sammarriqbal03" className="hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/in/sammar-iqbal-84a394357?" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </div>

      <p className="text-center text-[#8B93A7] text-xs mt-10">
        © {new Date().getFullYear()} Sammar Iqbal. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer