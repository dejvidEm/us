"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"

interface NavigationProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export default function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  const { t } = useLanguage()

  return (
    <nav className="fixed top-4 md:top-8 right-4 md:right-8 z-50" role="navigation" aria-label="Main navigation">
      <div className="flex items-center gap-3 md:gap-6">
        <LanguageSwitcher />
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="text-sm md:text-lg font-light text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300 px-2 md:px-4 rounded-full group"
          aria-label="Toggle between light and dark theme"
        >
          <div className="group-hover:rotate-180 transition-transform duration-500">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </div>
        </Button>
        <Button
          variant="ghost"
          className="text-sm md:text-lg font-light text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300 px-2 md:px-4"
        >
          {t("nav.ourWork")}
        </Button>
        <Button
          variant="ghost"
          className="text-sm md:text-lg font-light text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300 px-2 md:px-4"
        >
          {t("nav.services")}
        </Button>
        <Button
          className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-white/90 px-3 md:px-6 py-1.5 md:py-2 text-sm md:text-base hover:scale-105 transition-all duration-300 hover:shadow-lg"
        >
          {t("nav.contactUs")}
        </Button>
      </div>
    </nav>
  )
}
