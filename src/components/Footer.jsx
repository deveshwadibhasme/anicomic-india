import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-5">
      <div className="flex flex-col xl:flex-row justify-between w-full items-center mx-auto px-4">
        <div className="text-center">
          <h2 className="m-0 font-bold tracking-wider text-2xl md:text-3xl">
            ANICOMIC STUDIO
          </h2>
          <div
            className="my-2 text-lg md:text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent tracking-wide font-montserrat"
          >
            India's First Open Creator Studio
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mt-10 text-center md:text-left">
          {/* Quick Links */}
          <div className="flex-1 mb-2 md:mb-0">
            <h3 className="font-semibold mb-3 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-amber-400 transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-400 transition">About</a>
              </li>
              <li>
                <a href="/studio" className="hover:text-amber-400 transition">Studio</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-400 transition">Contact</a>
              </li>
            </ul>
          </div>
          {/* Studio Services */}
          <div className="flex-1 mb-2 md:mb-0">
            <h3 className="font-semibold mb-3 text-orange-400">Services</h3>
            <ul className="space-y-2">
              <li>Advertising Solutions</li>
              <li>Digital Marketing</li>
              <li>Content Creation</li>
              <li>Audio Series Production</li>
              <li>Entertainment Series</li>
            </ul>
          </div>
          {/* Contact */}
          <div className="flex-1 mb-2 md:mb-0">
            <h3 className="font-semibold mb-3 text-orange-400">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@anicomic.com" className="hover:text-amber-400 transition">info@anicomic.com</a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-amber-400 transition">+91 86056 88071</a>
              </li>
              <li>
                <span>Nagpur, India</span>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div className="flex-1">
            <h3 className="font-semibold mb-3 text-orange-400">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-amber-400 transition">
                <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-amber-400 transition">
                <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="mt-5 text-center">
          <p className="m-0">
            &copy; {new Date().getFullYear()} AniComic. All rights reserved.
          </p>
          <small className="block mt-2 text-gray-400">
            Made with <span className="text-red-400">&hearts;</span> by the AniComic Team
          </small>
        </div>
    </footer>
  )
}

export default Footer