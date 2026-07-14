import { useState } from 'react'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    formData.append('access_key', '6619e72f-4f3e-42c5-b573-171c5fc04285')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section>
      <div className="bg-[#0B0F1A] py-20 px-6 text-center">
        <p className="font-mono text-[#D4AF37] text-sm mb-3"> </p>
        <h2 className="font-display text-white text-3xl md:text-5xl font-bold mb-4">
          Let's Talk About <span className="text-gradient">Your Project</span>
        </h2>
        <p className="text-[#8B93A7]">Fill out the form and I'll get back to you soon.</p>
      </div>

      <div className="bg-[#F7F8FC] py-16 px-6">
        <div className="max-w-3xl mx-auto grid gap-4">
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 text-left bg-white p-8 rounded-2xl border border-gray-200"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Sammar Iqbal"
                required
                className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#6366F1] placeholder-gray-400 text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. sammar@example.com"
                required
                className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#6366F1] placeholder-gray-400 text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
                className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#6366F1] placeholder-gray-400 text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="4"
                required
                className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#6366F1] placeholder-gray-400 text-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-[#0B0F1A] text-white font-medium py-3 rounded-lg hover:bg-[#131A2B] transition disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm text-center">
                ✅ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

          <div className="flex justify-center gap-6 text-2xl text-gray-500 pt-4">
            <a href="mailto:sammarriqbal03@gmail.com" className="hover:text-[#6366F1] transition"><FiMail /></a>
            <a href="https://github.com/sammarriqbal03" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366F1] transition"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/sammar-iqbal-84a394357?" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366F1] transition"><FiLinkedin /></a>
            <a href="https://wa.me/923286230679" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366F1] transition"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact