"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "sk" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  sk: {
    // Navigation
    "nav.ourWork": "Naša práca",
    "nav.services": "Služby",
    "nav.contactUs": "Kontakt",
    
    // Hero Section
    "hero.badge": "Ocenená digitálna agentúra",
    "hero.title1": "Unique",
    "hero.title2": "Studio",
    "hero.subtitle": "Tvoríme pôsobivé digitálne zážitky, webové stránky a marketingové stratégie, ktoré povýšia vašu značku a prinášajú výsledky.",
    "hero.cta": "Začať projekt",
    
    // Showcase Section
    "showcase.title": "Transformujeme značky pomocou",
    "showcase.titleHighlight": "digitálnej inovácie",
    "showcase.subtitle": "Náš tím poskytuje vlastné webové dizajny, branding a marketingové riešenia, ktoré vám pomôžu vyniknúť v preplnenom digitálnom svete.",
    "showcase.trustedBy": "Dôverujú nám startupy, firmy a globálne značky",
    "showcase.caseStudy": "PRÍPADOVÁ ŠTÚDIA",
    "showcase.brandLaunch": "Spustenie značky",
    "showcase.webDesign": "Webový dizajn",
    "showcase.seoGrowth": "SEO a rast",
    "showcase.contentCreation": "Tvorba obsahu",
    "showcase.digitalCampaigns": "Digitálne kampane",
    "showcase.branding": "Branding",
    
    // Features Section
    "features.title": "Naše služby",
    "features.titleHighlight": "pre váš úspech",
    "features.subtitle": "Všetko, čo potrebujete na rast vašej firmy online: webový dizajn, marketing, branding a digitálna stratégia—všetko na jednom mieste.",
    "features.customWebDesign.title": "Vlastný webový dizajn",
    "features.customWebDesign.description": "Webové stránky šité na mieru vašej značke a obchodným cieľom. Responzívne, rýchle a krásne na každom zariadení.",
    "features.digitalMarketing.title": "Digitálny marketing",
    "features.digitalMarketing.description": "Kampane založené na dátach, ktoré zvýšia váš dosah, zapojenie a konverzie. Sociálne siete, vyhľadávanie a ďalšie.",
    "features.brandStrategy.title": "Brandová stratégia",
    "features.brandStrategy.description": "Pomôžeme vám definovať, pozicionovať a rozvíjať vašu značku pomocou kreatívnej stratégie a storytellingu.",
    "features.analytics.title": "Analytika a optimalizácia",
    "features.analytics.description": "Sledujte, analyzujte a optimalizujte svoju digitálnu prítomnosť pre maximálny ROI. Transparentné reportovanie a konateľné poznatky.",
    "features.instantDeploy": "Okamžité nasadenie",
    
    // CTA Section
    "cta.title": "Pripravení",
    "cta.titleHighlight": "rast?",
    "cta.subtitle": "Postavme niečo výnimočné spoločne. Ozvite sa nám a začnite svoj ďalší digitálny projekt.",
    "cta.button": "Začať projekt",
    
    // Contact Form
    "contact.title": "Získajte cenovú ponuku",
    "contact.subtitle": "Povedzte nám o vašom projekte a my sa vám ozveme do 24 hodín.",
    "contact.progress": "Pokrok",
    "contact.fields.name": "Meno / Spoločnosť",
    "contact.fields.email": "Email",
    "contact.fields.phone": "Telefón",
    "contact.fields.servicePlaceholder": "Vyberte typ služby",
    "contact.services.consultation": "Konzultácia",
    "contact.services.quote": "Cenová ponuka",
    "contact.services.partnership": "Partnerstvo",
    "contact.services.other": "Iné",
    "contact.submit": "Odoslať",
    "contact.submitting": "Odosielam...",
    "contact.quickCall": "Rýchly hovor",
    "contact.success.title": "Správa odoslaná!",
    "contact.success.message": "Ďakujeme za váš záujem. Ozveme sa vám čoskoro.",
    "contact.errors.nameRequired": "Meno je povinné",
    "contact.errors.emailRequired": "Email je povinný",
    "contact.errors.emailInvalid": "Neplatný email formát",
    "contact.errors.phoneInvalid": "Neplatný telefónny formát",
    "contact.errors.serviceRequired": "Typ služby je povinný",
    // Projects Showcase
    "projects.title": "Naše Projekty",
    "projects.subtitle": "Preskúmajte naše najnovšie práce a zistite, ako pomáhame klientom dosiahnuť ich ciele.",
    "projects.viewCaseStudy": "Zobraziť prípadovú štúdiu",
    "projects.viewFullCaseStudy": "Zobraziť celú štúdiu",
    "projects.close": "Zavrieť",
    "projects.challenge": "Výzva",
    "projects.solution": "Riešenie",
    "projects.impact": "Dopad",
    // Project Tags
    "projects.tags.web": "Web",
    "projects.tags.ecommerce": "E-commerce",
    "projects.tags.react": "React",
    "projects.tags.branding": "Branding",
    "projects.tags.design": "Design",
    "projects.tags.identity": "Identita",
    "projects.tags.mobile": "Mobilné",
    "projects.tags.reactNative": "React Native",
    "projects.tags.api": "API",
    "projects.tags.corporate": "Korporátne",
    "projects.tags.cms": "CMS",
    "projects.tags.saas": "SaaS",
    "projects.tags.dashboard": "Dashboard",
    "projects.tags.analytics": "Analytika",
    "projects.tags.marketing": "Marketing",
    "projects.tags.socialMedia": "Sociálne médiá",
    "projects.tags.seo": "SEO",
    // Project Items
    "projects.items.ecommerce.title": "E-commerce Platforma",
    "projects.items.ecommerce.description": "Moderný online obchod s pokročilým filtrovaním a bezproblémovým checkout procesom.",
    "projects.items.ecommerce.challenge": "Klient potreboval škálovateľné e-commerce riešenie, ktoré by zvládlo vysoký objem návštevníkov a poskytlo vynikajúci používateľský zážitok.",
    "projects.items.ecommerce.solution": "Vytvorili sme vlastnú platformu založenú na React s optimalizovaným výkonom, pokročilým vyhľadávaním a mobilným dizajnom.",
    "projects.items.ecommerce.impact": "Konverzný pomer sa zvýšil o 40% a bounce rate sa znížil o 25% v prvých 3 mesiacoch.",
    "projects.items.branding.title": "Dizajn Brand Identity",
    "projects.items.branding.description": "Kompletný vizuálny identitný systém pre tech startup vrátane loga, smerníc a marketingových materiálov.",
    "projects.items.branding.challenge": "Nový startup potreboval výraznú brand identitu, ktorá by sa odlíšila v konkurenčnom tech trhu.",
    "projects.items.branding.solution": "Vytvorili sme moderný, minimalistický brand systém s flexibilnými smernicami a komplexnými vizuálnymi aktívami.",
    "projects.items.branding.impact": "Rozpoznateľnosť značky sa zvýšila o 60% a pomohla zabezpečiť 2M$ v Series A financovaní.",
    "projects.items.mobile.title": "Vývoj Mobilnej Aplikácie",
    "projects.items.mobile.description": "Cross-platform mobilná aplikácia s real-time funkciami a offline možnosťami.",
    "projects.items.mobile.challenge": "Potreba mobilnej aplikácie, ktorá funguje bezproblémovo na iOS aj Android s real-time synchronizáciou dát.",
    "projects.items.mobile.solution": "Vyvinuli sme pomocou React Native s vlastnými natívnymi modulmi a robustnou offline-first architektúrou.",
    "projects.items.mobile.impact": "Dosiahli sme 4.8/5 hodnotenie v app store a 50K+ stiahnutí v prvom mesiaci.",
    "projects.items.corporate.title": "Korporátna Webstránka",
    "projects.items.corporate.description": "Profesionálna korporátna webstránka s CMS integráciou a viacjazyčnou podporou.",
    "projects.items.corporate.challenge": "Veľká korporácia potrebovala modernú webstránku, ktorú by mohol ľahko spravovať netechnický personál.",
    "projects.items.corporate.solution": "Vytvorili sme s Next.js a headless CMS, s pokročilým správou obsahu a SEO optimalizáciou.",
    "projects.items.corporate.impact": "Rýchlosť načítania stránok sa zlepšila o 70% a organický traffic sa zvýšil o 150%.",
    "projects.items.saas.title": "SaaS Dashboard",
    "projects.items.saas.description": "Komplexný analytický dashboard s real-time vizualizáciou dát a vlastnými reportovacími nástrojmi.",
    "projects.items.saas.challenge": "SaaS spoločnosť potrebovala intuitívny dashboard na pomoc používateľom pochopiť ich dáta a robiť informované rozhodnutia.",
    "projects.items.saas.solution": "Vytvorili sme interaktívny dashboard s vlastnými grafmi, filtrami a exportovateľnými reportmi pomocou moderných webových technológií.",
    "projects.items.saas.impact": "Engagement používateľov sa zvýšil o 80% a skóre spokojnosti zákazníkov sa zlepšilo na 4.9/5.",
    "projects.items.marketing.title": "Digitálna Marketingová Kampaň",
    "projects.items.marketing.description": "Komplexná digitálna marketingová stratégia so sociálnymi médiami, obsahom a platenou reklamou.",
    "projects.items.marketing.challenge": "B2B spoločnosť potrebovala zvýšiť povedomie o značke a generovať kvalifikované leady v konkurenčnom trhu.",
    "projects.items.marketing.solution": "Vyvinuli sme integrovanú marketingovú stratégiu naprieč viacerými kanálmi s datovo riadenou optimalizáciou.",
    "projects.items.marketing.impact": "Vygenerovali sme 300% viac kvalifikovaných leadov a znížili náklady na získanie zákazníka o 45%.",
    // Footer
    "footer.cta.title": "STRETNIME SA K VAŠEJ ZNAČKE",
    "footer.cta.button": "KONTAKTUJTE NÁS",
    "footer.social.title": "Sociálne siete",
    "footer.social.facebook": "Facebook",
    "footer.social.instagram": "Instagram",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.youtube": "YouTube",
    "footer.offices.title": "Offices",
    "footer.offices.nitra": "Nitra",
    "footer.offices.bratislava": "Bratislava",
    "footer.offices.santander": "Santander",
    "footer.copyright": "© UNIQUE Studio - Všetky práva vyhradené",
    "footer.newsletter": "Odoberajte newsletter",
    "footer.brand": "UNIQUE"
  },
  en: {
    // Navigation
    "nav.ourWork": "Our Work",
    "nav.services": "Services",
    "nav.contactUs": "Contact Us",
    
    // Hero Section
    "hero.badge": "Award-Winning Digital Agency",
    "hero.title1": "Unique",
    "hero.title2": "Studio",
    "hero.subtitle": "We craft impactful digital experiences, websites, and marketing strategies that elevate your brand and drive results.",
    "hero.cta": "Start Your Project",
    
    // Showcase Section
    "showcase.title": "Transforming Brands with",
    "showcase.titleHighlight": "Digital Innovation",
    "showcase.subtitle": "Our team delivers custom web design, branding, and marketing solutions that help you stand out in a crowded digital world.",
    "showcase.trustedBy": "Trusted by startups, businesses, and global brands",
    "showcase.caseStudy": "CASE STUDY",
    "showcase.brandLaunch": "Brand Launch",
    "showcase.webDesign": "Web Design",
    "showcase.seoGrowth": "SEO & Growth",
    "showcase.contentCreation": "Content Creation",
    "showcase.digitalCampaigns": "Digital Campaigns",
    "showcase.branding": "Branding",
    
    // Features Section
    "features.title": "Our Services",
    "features.titleHighlight": "for Your Success",
    "features.subtitle": "Everything you need to grow your business online: web design, marketing, branding, and digital strategy—all in one place.",
    "features.customWebDesign.title": "Custom Web Design",
    "features.customWebDesign.description": "Bespoke websites tailored to your brand and business goals. Responsive, fast, and beautiful on every device.",
    "features.digitalMarketing.title": "Digital Marketing",
    "features.digitalMarketing.description": "Data-driven campaigns that boost your reach, engagement, and conversions. Social, search, and beyond.",
    "features.brandStrategy.title": "Brand Strategy",
    "features.brandStrategy.description": "We help you define, position, and grow your brand with creative strategy and storytelling.",
    "features.analytics.title": "Analytics & Optimization",
    "features.analytics.description": "Track, analyze, and optimize your digital presence for maximum ROI. Transparent reporting and actionable insights.",
    "features.instantDeploy": "Instant Deploy",
    
    // CTA Section
    "cta.title": "Ready to",
    "cta.titleHighlight": "Grow?",
    "cta.subtitle": "Let's build something extraordinary together. Get in touch to start your next digital project.",
    "cta.button": "Start Your Project",
    
    // Contact Form
    "contact.title": "Get a Quote",
    "contact.subtitle": "Tell us about your project and we'll get back to you within 24 hours.",
    "contact.progress": "Progress",
    "contact.fields.name": "Name / Company",
    "contact.fields.email": "Email",
    "contact.fields.phone": "Phone",
    "contact.fields.servicePlaceholder": "Select service type",
    "contact.services.consultation": "Consultation",
    "contact.services.quote": "Quote",
    "contact.services.partnership": "Partnership",
    "contact.services.other": "Other",
    "contact.submit": "Send",
    "contact.submitting": "Sending...",
    "contact.quickCall": "Quick Call",
    "contact.success.title": "Message Sent!",
    "contact.success.message": "Thank you for your interest. We'll get back to you soon.",
    "contact.errors.nameRequired": "Name is required",
    "contact.errors.emailRequired": "Email is required",
    "contact.errors.emailInvalid": "Invalid email format",
    "contact.errors.phoneInvalid": "Invalid phone format",
    "contact.errors.serviceRequired": "Service type is required",
    // Projects Showcase
    "projects.title": "Our Projects",
    "projects.subtitle": "Explore our latest work and discover how we help clients achieve their goals.",
    "projects.viewCaseStudy": "View Case Study",
    "projects.viewFullCaseStudy": "View Full Case Study",
    "projects.close": "Close",
    "projects.challenge": "Challenge",
    "projects.solution": "Solution",
    "projects.impact": "Impact",
    // Project Tags
    "projects.tags.web": "Web",
    "projects.tags.ecommerce": "E-commerce",
    "projects.tags.react": "React",
    "projects.tags.branding": "Branding",
    "projects.tags.design": "Design",
    "projects.tags.identity": "Identity",
    "projects.tags.mobile": "Mobile",
    "projects.tags.reactNative": "React Native",
    "projects.tags.api": "API",
    "projects.tags.corporate": "Corporate",
    "projects.tags.cms": "CMS",
    "projects.tags.saas": "SaaS",
    "projects.tags.dashboard": "Dashboard",
    "projects.tags.analytics": "Analytics",
    "projects.tags.marketing": "Marketing",
    "projects.tags.socialMedia": "Social Media",
    "projects.tags.seo": "SEO",
    // Project Items
    "projects.items.ecommerce.title": "E-commerce Platform",
    "projects.items.ecommerce.description": "Modern online store with advanced filtering and seamless checkout experience.",
    "projects.items.ecommerce.challenge": "Client needed a scalable e-commerce solution that could handle high traffic and provide excellent user experience.",
    "projects.items.ecommerce.solution": "Built a custom React-based platform with optimized performance, advanced search, and mobile-first design.",
    "projects.items.ecommerce.impact": "Increased conversion rate by 40% and reduced bounce rate by 25% within first 3 months.",
    "projects.items.branding.title": "Brand Identity Design",
    "projects.items.branding.description": "Complete visual identity system for a tech startup including logo, guidelines, and marketing materials.",
    "projects.items.branding.challenge": "New startup needed a distinctive brand identity that would stand out in the competitive tech market.",
    "projects.items.branding.solution": "Created a modern, minimalist brand system with flexible guidelines and comprehensive visual assets.",
    "projects.items.branding.impact": "Brand recognition increased by 60% and helped secure $2M in Series A funding.",
    "projects.items.mobile.title": "Mobile App Development",
    "projects.items.mobile.description": "Cross-platform mobile application with real-time features and offline capabilities.",
    "projects.items.mobile.challenge": "Need for a mobile app that works seamlessly across iOS and Android with real-time data sync.",
    "projects.items.mobile.solution": "Developed using React Native with custom native modules and robust offline-first architecture.",
    "projects.items.mobile.impact": "Achieved 4.8/5 app store rating and 50K+ downloads in first month.",
    "projects.items.corporate.title": "Corporate Website",
    "projects.items.corporate.description": "Professional corporate website with CMS integration and multilingual support.",
    "projects.items.corporate.challenge": "Large corporation needed a modern website that could be easily managed by non-technical staff.",
    "projects.items.corporate.solution": "Built with Next.js and headless CMS, featuring advanced content management and SEO optimization.",
    "projects.items.corporate.impact": "Improved page load speed by 70% and increased organic traffic by 150%.",
    "projects.items.saas.title": "SaaS Dashboard",
    "projects.items.saas.description": "Complex analytics dashboard with real-time data visualization and custom reporting tools.",
    "projects.items.saas.challenge": "SaaS company needed an intuitive dashboard to help users understand their data and make informed decisions.",
    "projects.items.saas.solution": "Created an interactive dashboard with custom charts, filters, and exportable reports using modern web technologies.",
    "projects.items.saas.impact": "User engagement increased by 80% and customer satisfaction score improved to 4.9/5.",
    "projects.items.marketing.title": "Digital Marketing Campaign",
    "projects.items.marketing.description": "Comprehensive digital marketing strategy with social media, content, and paid advertising.",
    "projects.items.marketing.challenge": "B2B company needed to increase brand awareness and generate qualified leads in a competitive market.",
    "projects.items.marketing.solution": "Developed integrated marketing strategy across multiple channels with data-driven optimization.",
    "projects.items.marketing.impact": "Generated 300% more qualified leads and reduced cost per acquisition by 45%.",
    // Footer
    "footer.cta.title": "LET'S MEET FOR YOUR BRAND",
    "footer.cta.button": "CONTACT US",
    "footer.social.title": "Social Networks",
    "footer.social.facebook": "Facebook",
    "footer.social.instagram": "Instagram",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.youtube": "YouTube",
    "footer.offices.title": "Offices",
    "footer.offices.nitra": "Nitra",
    "footer.offices.bratislava": "Bratislava",
    "footer.offices.santander": "Santander",
    "footer.copyright": "© UNIQUE Brands - All rights reserved",
    "footer.newsletter": "Subscribe to newsletter",
    "footer.brand": "UNIQUE"
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("sk") // Slovak as default

  // Load language preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "sk" || savedLanguage === "en")) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // Save language preference to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
