import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* AVATAR */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 mx-auto md:mx-0"
        >
          <span className="absolute top-0 left-0 w-full h-[2px] gradient-bar z-10"></span>
          <img
            src="/images/profile.jpg"
            alt="Sammar Iqbal"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[#6366F1] text-sm mb-2"
          >
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[#0B0F1A] text-3xl md:text-4xl font-bold mb-2"
          >
            Sammar Iqbal
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm mb-4 h-6 flex items-center justify-center md:justify-start"
          >
            <span className="text-gradient font-semibold">
              <TypeAnimation
                sequence={[
                  'Full Stack Web Developer',
                  1500,
                  'Flutter App Developer',
                  1500,
                  'UI/UX Designer',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm mb-6"
          >
            <FiMapPin />
            <span>Pakistan · Remote Worldwide</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 leading-relaxed mb-4"
          >
            I'm a Software Engineer and founder of Techverse Agency (Remote) working as a Full Stack Web Developer with the
            MERN stack, a Mobile App Developer using Flutter, and a UI/UX Designer.
            I build responsive websites, cross-platform mobile apps, and clean,
            user-focused interfaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-gray-600 leading-relaxed mb-6"
          >
            On the frontend I work with HTML, CSS, JavaScript, React, and Tailwind
            CSS. For data I use MongoDB and Firebase, and I ship, host, and design
            with Git, GitHub, Vercel, Netlify, Render, Railway, and Figma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/#contact"
              className="inline-block bg-[#0B0F1A] text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-[#131A2B] transition"
            >
              Hire Me
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About