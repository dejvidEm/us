"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CallToActionSection() {
  const { t } = useLanguage()

  return (
    <section
      className="min-h-screen flex items-center justify-center relative py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Final morphed circles - back to original state */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] rounded-full border border-gray-200 dark:border-white/10 subtle-breathe" />
        <div
          className="w-[400px] md:w-[650px] lg:w-[800px] h-[400px] md:h-[650px] lg:h-[800px] rounded-full border border-gray-100 dark:border-white/5 absolute subtle-breathe"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="w-[500px] md:w-[800px] lg:w-[1000px] h-[500px] md:h-[800px] lg:h-[1000px] rounded-full border border-gray-300 dark:border-white/3 absolute subtle-breathe"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center px-8 md:px-12 lg:px-16 relative z-10">
        <h2
          id="cta-heading"
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 md:mb-16 leading-tight text-gray-900 dark:text-white"
        >
          {t("cta.title")} <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent">{t("cta.titleHighlight")}</span>
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-white/70 mb-16 md:mb-20 leading-relaxed">
          {t("cta.subtitle")}
        </p>

        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-500 dark:via-pink-500 dark:to-cyan-500 p-[1px] rounded-full group hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <Button
            className="rounded-full bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black/90 px-8 md:px-12 py-6 md:py-8 text-lg md:text-2xl group"
          >
            {t("cta.button")}
            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
