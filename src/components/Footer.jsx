import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-900 via-orange-800 to-amber-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title & Tagline */}
        <div className="text-center mb-10">
          <h2 className="font-extrabold tracking-wider text-3xl md:text-4xl mb-2 drop-shadow-lg">
            ANICOMIC INTERNATIONAL
          </h2>
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent tracking-wide font-montserrat">
            India's First Open Creator Studio
          </div>
        </div>
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-300 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition">About</Link>
              </li>
              <li>
                <a href="https://internship.anicomic.in" target="_blank" className="hover:text-amber-400 transition">Internship</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-amber-400 transition">Registration for Internship</Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-300 text-lg">Services</h3>
            <ul className="space-y-2">
              <li>Advertising Solutions</li>
              <li>Digital Marketing</li>
              <li>Content Creation</li>
              <li>Audio Series Production</li>
              <li>Entertainment Series</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-300 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@anicomic.com" className="hover:text-amber-400 transition">info@anicomic.com</a>
              </li>
              <li>
                <a href="tel:+918605688071" className="hover:text-amber-400 transition">+91 86056 88071</a>
              </li>
              <li>
                <span>Nagpur, India</span>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-orange-300 text-lg">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.instagram.com/anicomic_studio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-amber-400 transition">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-amber-400 transition">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-10 text-center border-t border-orange-800 pt-6">
          <p className="m-0 text-lg">
            &copy; {new Date().getFullYear()} Anicomic. All rights reserved.
          </p>
          <small className="block mt-2 text-gray-300">
            Made with <span className="text-red-400">&hearts;</span> by the Anicomic Team
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer