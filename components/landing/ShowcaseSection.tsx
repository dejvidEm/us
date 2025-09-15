"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface ShowcaseSectionProps {
  isHoveringDesignElement: boolean
  setIsHoveringDesignElement: (hovering: boolean) => void
}

export default function ShowcaseSection({ isHoveringDesignElement, setIsHoveringDesignElement }: ShowcaseSectionProps) {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 relative" aria-labelledby="showcase-heading">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pr-16 mb-16 lg:mb-0">
            <h2
              id="showcase-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 leading-tight"
            >
              {t("showcase.title")} <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">{t("showcase.titleHighlight")}</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white/70 mb-8 md:mb-12 leading-relaxed">
              {t("showcase.subtitle")}
            </p>
            <div className="flex items-center gap-6 md:gap-8">
              <div className="w-16 md:w-20 h-[2px] bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400" />
              <p className="text-sm md:text-base text-gray-500 dark:text-white/50">
                {t("showcase.trustedBy")}
              </p>
            </div>
          </div>

          {/* Right Column - Bento Preview */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-10 md:-top-20 -left-10 md:-left-20 w-20 md:w-40 h-20 md:h-40 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 blur-3xl" />
            <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-20 md:w-40 h-20 md:h-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 blur-3xl" />

            <div
              className="grid grid-cols-4 grid-rows-4 gap-3 md:gap-4 h-[400px] md:h-[500px] lg:h-[600px] relative"
              onMouseEnter={() => setIsHoveringDesignElement(true)}
              onMouseLeave={() => setIsHoveringDesignElement(false)}
            >
              {/* Hero Box - Stories (emphasized with special styling) */}
              <div className="col-span-2 row-span-2 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/15 dark:to-pink-500/15 backdrop-blur-sm border-2 border-purple-300/50 dark:border-purple-400/30 p-4 md:p-6 transition-all duration-500 flex flex-col justify-between shadow-lg group hover:scale-[1.02] hover:shadow-xl hover:border-purple-400/70 dark:hover:border-purple-400/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-purple-600 dark:text-purple-400">{t("showcase.caseStudy")}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white relative z-10">
                  {t("showcase.brandLaunch")}
                </h3>
              </div>

              <div className="col-span-2 row-span-1 rounded-2xl md:rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-3 md:p-6 transition-all duration-500 flex items-end shadow-sm group hover:scale-[1.02] hover:shadow-lg hover:bg-white/90 dark:hover:bg-white/10 hover:border-blue-300 dark:hover:border-blue-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-lg md:text-2xl font-medium text-gray-900 dark:text-white relative z-10">
                  {t("showcase.webDesign")}
                </h3>
              </div>

              <div className="col-span-1 row-span-1 rounded-2xl md:rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-2 md:p-6 transition-all duration-500 flex items-end shadow-sm group hover:scale-[1.05] hover:shadow-lg hover:bg-white/90 dark:hover:bg-white/10 hover:border-green-300 dark:hover:border-green-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 dark:from-green-500/10 dark:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-sm md:text-xl font-medium text-gray-900 dark:text-white relative z-10">
                  {t("showcase.seoGrowth")}
                </h3>
              </div>

              <div className="col-span-1 row-span-2 rounded-2xl md:rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-2 md:p-6 transition-all duration-500 flex items-end shadow-sm group hover:scale-[1.05] hover:shadow-lg hover:bg-white/90 dark:hover:bg-white/10 hover:border-orange-300 dark:hover:border-orange-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-sm md:text-xl font-medium text-gray-900 dark:text-white relative z-10">
                  {t("showcase.contentCreation")}
                </h3>
              </div>

              <div className="col-span-2 row-span-1 rounded-2xl md:rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-3 md:p-6 transition-all duration-500 flex items-end shadow-sm group hover:scale-[1.02] hover:shadow-lg hover:bg-white/90 dark:hover:bg-white/10 hover:border-cyan-300 dark:hover:border-cyan-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-lg md:text-2xl font-medium text-gray-900 dark:text-white relative z-10">
                  {t("showcase.digitalCampaigns")}
                </h3>
              </div>

              <div className="col-span-1 row-span-1 rounded-2xl md:rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-2 md:p-6 transition-all duration-500 flex items-end shadow-sm group hover:scale-[1.05] hover:shadow-lg hover:bg-white/90 dark:hover:bg-white/10 hover:border-pink-300 dark:hover:border-pink-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-sm md:text-xl font-medium text-gray-900 dark:text-white relative z-10">
                  {t("showcase.branding")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
