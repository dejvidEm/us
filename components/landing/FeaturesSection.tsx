"use client"

import {
  Grid3X3,
  ImageIcon,
  FileText,
  Video,
  Music,
  Layers,
  Infinity,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 relative" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <h2
            id="features-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              {t("features.title")}
            </span>{" "}
            {t("features.titleHighlight")}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white/70 leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Artistic Feature Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-28">
            <article className="relative">
              <div className="absolute -top-5 md:-top-10 -left-5 md:-left-10 w-20 md:w-40 h-20 md:h-40 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 blur-3xl" />
              <div className="mb-8 md:mb-12 w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Grid3X3 className="w-8 md:w-10 h-8 md:h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white">
                {t("features.customWebDesign.title")}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-white/70 leading-relaxed mb-8 md:mb-12">
                {t("features.customWebDesign.description")}
              </p>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div className="h-16 md:h-36 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/15 dark:to-pink-500/15 backdrop-blur-sm border border-purple-200 dark:border-purple-400/20 shadow-sm flex items-center justify-center group hover:scale-105 hover:-rotate-1 hover:shadow-lg transition-all duration-500">
                  <div className="grid grid-cols-2 gap-1 group-hover:gap-1.5 transition-all duration-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm group-hover:bg-purple-500 transition-colors duration-300" />
                    <div className="w-2 h-2 bg-pink-400 rounded-sm group-hover:bg-pink-500 transition-colors duration-300" />
                    <div className="w-2 h-2 bg-pink-400 rounded-sm group-hover:bg-pink-500 transition-colors duration-300" />
                    <div className="w-2 h-2 bg-purple-400 rounded-sm group-hover:bg-purple-500 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-16 md:h-36 rounded-xl md:rounded-2xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 dark:from-pink-500/15 dark:to-orange-500/15 backdrop-blur-sm border border-pink-200 dark:border-pink-400/20 shadow-sm flex items-center justify-center group hover:scale-105 hover:shadow-lg transition-all duration-500 delay-75">
                  <div className="grid grid-cols-3 gap-1 group-hover:gap-1.5 transition-all duration-300">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-sm group-hover:bg-pink-500 transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-sm group-hover:bg-orange-500 transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-sm group-hover:bg-pink-500 transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-sm group-hover:bg-orange-500 transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-sm group-hover:bg-pink-500 transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-sm group-hover:bg-orange-500 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-16 md:h-36 rounded-xl md:rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 dark:from-orange-500/15 dark:to-yellow-500/15 backdrop-blur-sm border border-orange-200 dark:border-orange-400/20 shadow-sm flex items-center justify-center group hover:scale-105 hover:rotate-1 hover:shadow-lg transition-all duration-500 delay-150">
                  <Layers className="w-6 h-6 text-orange-500 group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="absolute -top-5 md:-top-10 -right-5 md:-right-10 w-20 md:w-40 h-20 md:h-40 rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10 blur-3xl" />
              <div className="mb-8 md:mb-12 w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Zap className="w-8 md:w-10 h-8 md:h-10 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white">
                {t("features.digitalMarketing.title")}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-white/70 leading-relaxed mb-8 md:mb-12">
                {t("features.digitalMarketing.description")}
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="h-24 md:h-36 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/15 dark:to-blue-500/15 backdrop-blur-sm border border-cyan-200 dark:border-cyan-400/20 shadow-sm flex flex-col items-center justify-center gap-2 group hover:scale-105 hover:-rotate-1 hover:shadow-lg transition-all duration-500">
                  <div className="flex gap-2 group-hover:gap-3 transition-all duration-300">
                    <ImageIcon className="w-4 h-4 text-cyan-500 group-hover:text-cyan-600 group-hover:scale-110 transition-all duration-300" />
                    <Video className="w-4 h-4 text-blue-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 delay-75" />
                  </div>
                  <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover:w-10 transition-all duration-300" />
                </div>
                <div className="h-24 md:h-36 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/15 dark:to-indigo-500/15 backdrop-blur-sm border border-blue-200 dark:border-blue-400/20 shadow-sm flex flex-col items-center justify-center gap-2 group hover:scale-105 hover:rotate-1 hover:shadow-lg transition-all duration-500 delay-75">
                  <div className="flex gap-2 group-hover:gap-3 transition-all duration-300">
                    <FileText className="w-4 h-4 text-blue-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                    <Music className="w-4 h-4 text-indigo-500 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-300 delay-75" />
                  </div>
                  <div className="w-6 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full group-hover:w-8 transition-all duration-300" />
                </div>
              </div>
            </article>

            <article className="relative group">
              <div className="absolute -bottom-5 md:-bottom-10 -left-5 md:-left-10 w-20 md:w-40 h-20 md:h-40 rounded-full bg-gradient-to-r from-green-500/5 to-emerald-500/5 dark:from-green-500/10 dark:to-emerald-500/10 blur-3xl" />
              <div className="mb-8 md:mb-12 w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Infinity className="w-8 md:w-10 h-8 md:h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white">
                {t("features.brandStrategy.title")}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-white/70 leading-relaxed mb-8 md:mb-12">
                {t("features.brandStrategy.description")}
              </p>
              <div className="relative h-32 md:h-40 overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-b from-green-500/10 via-emerald-500/10 to-transparent dark:from-green-500/15 dark:via-emerald-500/15 dark:to-transparent backdrop-blur-sm border border-green-200 dark:border-green-400/20 shadow-sm">
                {/* Infinite bento grid extending downward */}
                <div className="absolute inset-0 p-2 md:p-3">
                  <div className="grid grid-cols-4 gap-1 md:gap-1.5 h-full">
                    {/* Row 1 */}
                    <div className="col-span-2 h-6 md:h-8 rounded bg-green-400/60 group-hover:bg-green-500/60 transition-colors duration-300" />
                    <div className="col-span-1 h-6 md:h-8 rounded bg-emerald-400/60 group-hover:bg-emerald-500/60 transition-colors duration-300" />
                    <div className="col-span-1 h-6 md:h-8 rounded bg-teal-400/60 group-hover:bg-teal-500/60 transition-colors duration-300" />

                    {/* Row 2 */}
                    <div className="col-span-1 h-6 md:h-8 rounded bg-emerald-400/50 group-hover:bg-emerald-500/50 transition-colors duration-300" />
                    <div className="col-span-3 h-6 md:h-8 rounded bg-green-400/50 group-hover:bg-green-500/50 transition-colors duration-300" />

                    {/* Row 3 */}
                    <div className="col-span-3 h-6 md:h-8 rounded bg-teal-400/40 group-hover:bg-teal-500/40 transition-colors duration-300" />
                    <div className="col-span-1 h-6 md:h-8 rounded bg-green-400/40 group-hover:bg-green-500/40 transition-colors duration-300" />

                    {/* Row 4 - Fading */}
                    <div className="col-span-2 h-6 md:h-8 rounded bg-emerald-400/30 group-hover:bg-emerald-500/30 transition-colors duration-300" />
                    <div className="col-span-2 h-6 md:h-8 rounded bg-green-400/30 group-hover:bg-green-500/30 transition-colors duration-300" />

                    {/* Row 5 - More fading */}
                    <div className="col-span-1 h-4 md:h-6 rounded bg-teal-400/20 group-hover:bg-teal-500/20 transition-colors duration-300" />
                    <div className="col-span-2 h-4 md:h-6 rounded bg-emerald-400/20 group-hover:bg-emerald-500/20 transition-colors duration-300" />
                    <div className="col-span-1 h-4 md:h-6 rounded bg-green-400/20 group-hover:bg-green-500/20 transition-colors duration-300" />
                  </div>
                </div>

                {/* Fade out gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none" />

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-emerald-500/5 dark:from-green-500/10 dark:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </article>

            <article className="relative">
              <div className="absolute -bottom-5 md:-bottom-10 -right-5 md:-right-10 w-20 md:w-40 h-20 md:h-40 rounded-full bg-gradient-to-r from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10 blur-3xl" />
              <div className="mb-8 md:mb-12 w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white">
                {t("features.analytics.title")}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-white/70 leading-relaxed mb-8 md:mb-12">
                {t("features.analytics.description")}
              </p>
              <div className="h-20 md:h-40 rounded-xl md:rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/15 dark:to-red-500/15 backdrop-blur-sm border border-orange-200 dark:border-orange-400/20 shadow-sm flex items-center justify-center group hover:scale-105 hover:shadow-lg transition-all duration-500">
                <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="text-sm font-medium text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors duration-300">
                    {t("features.instantDeploy")}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
