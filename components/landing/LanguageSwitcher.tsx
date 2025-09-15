"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "sk" ? "en" : "sk")
  }

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="text-sm md:text-lg font-light text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300 px-2 md:px-4 rounded-full group"
      aria-label="Switch language"
    >
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
        <span className="hidden sm:inline">
          {language === "sk" ? "EN" : "SK"}
        </span>
      </div>
    </Button>
  )
}
