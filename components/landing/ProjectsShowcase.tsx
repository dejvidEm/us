"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { X, ExternalLink, ArrowRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  challenge: string
  solution: string
  impact: string
  clientLogo?: string
  caseStudyUrl?: string
}

const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: 1,
    title: t("projects.items.ecommerce.title"),
    description: t("projects.items.ecommerce.description"),
    image: "/placeholder.jpg",
    tags: [t("projects.tags.web"), t("projects.tags.ecommerce"), t("projects.tags.react")],
    challenge: t("projects.items.ecommerce.challenge"),
    solution: t("projects.items.ecommerce.solution"),
    impact: t("projects.items.ecommerce.impact"),
    clientLogo: "/placeholder-logo.svg"
  },
  {
    id: 2,
    title: t("projects.items.branding.title"),
    description: t("projects.items.branding.description"),
    image: "/placeholder.jpg",
    tags: [t("projects.tags.branding"), t("projects.tags.design"), t("projects.tags.identity")],
    challenge: t("projects.items.branding.challenge"),
    solution: t("projects.items.branding.solution"),
    impact: t("projects.items.branding.impact"),
    clientLogo: "/placeholder-logo.svg"
  },
  {
    id: 3,
    title: t("projects.items.mobile.title"),
    description: t("projects.items.mobile.description"),
    image: "/placeholder.jpg",
    tags: [t("projects.tags.mobile"), t("projects.tags.reactNative"), t("projects.tags.api")],
    challenge: t("projects.items.mobile.challenge"),
    solution: t("projects.items.mobile.solution"),
    impact: t("projects.items.mobile.impact"),
    clientLogo: "/placeholder-logo.svg"
  },
  {
    id: 4,
    title: t("projects.items.corporate.title"),
    description: t("projects.items.corporate.description"),
    image: "/placeholder.jpg",
    tags: [t("projects.tags.web"), t("projects.tags.corporate"), t("projects.tags.cms")],
    challenge: t("projects.items.corporate.challenge"),
    solution: t("projects.items.corporate.solution"),
    impact: t("projects.items.corporate.impact"),
    clientLogo: "/placeholder-logo.svg"
  },
  {
    id: 5,
    title: t("projects.items.saas.title"),
    description: t("projects.items.saas.description"),
    image: "/placeholder.jpg",
    tags: [t("projects.tags.saas"), t("projects.tags.dashboard"), t("projects.tags.analytics")],
    challenge: t("projects.items.saas.challenge"),
    solution: t("projects.items.saas.solution"),
    impact: t("projects.items.saas.impact"),
    clientLogo: "/placeholder-logo.svg"
  },
  {
    id: 6,
    title: t("projects.items.marketing.title"),
    description: t("projects.items.marketing.description"),
    image: "/placeholder.jpg",
    tags: [t("projects.tags.marketing"), t("projects.tags.socialMedia"), t("projects.tags.seo")],
    challenge: t("projects.items.marketing.challenge"),
    solution: t("projects.items.marketing.solution"),
    impact: t("projects.items.marketing.impact"),
    clientLogo: "/placeholder-logo.svg"
  }
]

export default function ProjectsShowcase() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Get translated projects
  const projects = getProjects(t)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target)
            if (index !== -1) {
              setVisibleCards(prev => new Set([...prev, index]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal()
  }

  return (
    <>
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-6">
              {t("projects.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${
                  visibleCards.has(index) 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openModal(project)}
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white dark:bg-slate-700 text-gray-900 dark:text-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-slate-600 flex items-center gap-2 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t("projects.viewCaseStudy")}
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Project Image */}
              <div className="relative h-80 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Details */}
              <div className="p-8">
                {/* Client Logo */}
                {selectedProject.clientLogo && (
                  <div className="mb-6">
                    <img
                      src={selectedProject.clientLogo}
                      alt="Client Logo"
                      className="h-8 w-auto opacity-60"
                    />
                  </div>
                )}

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {selectedProject.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Case Study Content */}
                <div className="space-y-8">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      {t("projects.challenge")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {t("projects.solution")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {t("projects.impact")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  {selectedProject.caseStudyUrl && (
                    <a
                      href={selectedProject.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t("projects.viewFullCaseStudy")}
                    </a>
                  )}
                  <button
                    onClick={closeModal}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {t("projects.close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
