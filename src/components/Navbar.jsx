import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Contact', path: '/#contact' },
  ]

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#0A1128]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-[#D4AF37] font-mono text-lg">
          {"<Sammar.Iqbal />"}
        </h1>

        <div className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[#8FA3C8] px-4 py-2 rounded-lg hover:text-[#D4AF37] hover:bg-white/5 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-2 px-6 pb-6 font-mono text-sm bg-[#0A1128]">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-[#8FA3C8] hover:text-[#D4AF37] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar