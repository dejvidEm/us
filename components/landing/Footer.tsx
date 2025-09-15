"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { ArrowRight, CornerUpRight } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate rotation based on scroll position
  const rotation = Math.min(scrollY * 0.5, 360) // Rotate up to 360 degrees

  return (
    <footer className="relative z-20 bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Section - Main Call to Action */}
          <div className="flex items-start gap-6">
            {/* Rotating Corner Arrow */}
            <div className="flex-shrink-0 mt-2">
              <CornerUpRight 
                size={80} 
                className="text-yellow-400 transition-transform duration-300 ease-out"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: 'center'
                }}
              />
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {t("footer.cta.title").split(' ').map((word, index) => (
                  <span key={index} className="block">
                    {word}
                  </span>
                ))}
              </h2>
              
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 border border-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                {t("footer.cta.button")}
              </a>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Social Media Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">{t("footer.social.title")}</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://facebook.com/galtonbrands" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {t("footer.social.facebook")}
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com/galtonbrands" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {t("footer.social.instagram")}
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/company/galtonbrands" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {t("footer.social.linkedin")}
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com/@galtonbrands" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {t("footer.social.youtube")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Offices Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6">{t("footer.offices.title")}</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://maps.google.com/?q=Nitra,Slovakia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {t("footer.offices.nitra")}
                  </a>
                </li>
                <li>
                  <a 
                    href="https://maps.google.com/?q=Bratislava,Slovakia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {t("footer.offices.bratislava")}
                  </a>
                </li>
                <li>
                  <a 
                    href="https://maps.google.com/?q=Santander,Spain" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {t("footer.offices.santander")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            {t("footer.copyright")}
          </div>

          {/* Newsletter */}
          <a 
            href="mailto:newsletter@galtonbrands.com?subject=Newsletter Subscription" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm">{t("footer.newsletter")}</span>
            <ArrowRight className="w-4 h-4 text-yellow-400" />
          </a>

          {/* Brand Logo */}
          <div className="text-2xl font-bold">
            {t("footer.brand")}<sup className="text-xs">®</sup>
          </div>
        </div>
      </div>
    </footer>
  )
}
