"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Phone, Send } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const CALENDLY_URL = "https://calendly.com/your-username" // Replace with actual Calendly URL

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  serviceType?: string
}

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // Calculate progress percentage
  const requiredFields = ['name', 'email', 'serviceType']
  const filledRequiredFields = requiredFields.filter(field => formData[field as keyof FormData].trim() !== '')
  const progressPercentage = (filledRequiredFields.length / requiredFields.length) * 100

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Phone validation (international format)
  const isValidPhone = (phone: string) => {
    if (!phone.trim()) return true // Optional field
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t("contact.errors.nameRequired")
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired")
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid")
    }

    if (formData.phone.trim() && !isValidPhone(formData.phone)) {
      newErrors.phone = t("contact.errors.phoneInvalid")
    }

    if (!formData.serviceType) {
      newErrors.serviceType = t("contact.errors.serviceRequired")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Check if form is valid for submit button
  const isFormValid = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           isValidEmail(formData.email) &&
           formData.serviceType !== '' &&
           (formData.phone.trim() === '' || isValidPhone(formData.phone))
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate async submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", serviceType: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleQuickCall = () => {
    window.open(CALENDLY_URL, '_blank')
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8 md:p-12">
      <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-white/70">
              {t("contact.progress")}
            </span>
            <span className="text-sm text-gray-500 dark:text-white/50">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Form Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/70">
            {t("contact.subtitle")}
          </p>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t("contact.success.title")}
            </h3>
            <p className="text-gray-600 dark:text-white/70">
              {t("contact.success.message")}
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`h-14 px-4 text-lg bg-transparent border-2 transition-all duration-300 ${
                  focusedField === 'name' || formData.name
                    ? 'border-purple-500 dark:border-purple-400'
                    : 'border-gray-300 dark:border-white/20'
                } ${
                  errors.name ? 'border-red-500 dark:border-red-400' : ''
                }`}
                placeholder=" "
              />
              <Label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'name' || formData.name
                    ? 'top-2 text-sm text-purple-600 dark:text-purple-400'
                    : 'top-1/2 -translate-y-1/2 text-lg text-gray-500 dark:text-white/50'
                }`}
              >
                {t("contact.fields.name")} *
              </Label>
              {errors.name && (
                <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`h-14 px-4 text-lg bg-transparent border-2 transition-all duration-300 ${
                  focusedField === 'email' || formData.email
                    ? 'border-purple-500 dark:border-purple-400'
                    : 'border-gray-300 dark:border-white/20'
                } ${
                  errors.email ? 'border-red-500 dark:border-red-400' : ''
                }`}
                placeholder=" "
              />
              <Label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'email' || formData.email
                    ? 'top-2 text-sm text-purple-600 dark:text-purple-400'
                    : 'top-1/2 -translate-y-1/2 text-lg text-gray-500 dark:text-white/50'
                }`}
              >
                {t("contact.fields.email")} *
              </Label>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={`h-14 px-4 text-lg bg-transparent border-2 transition-all duration-300 ${
                  focusedField === 'phone' || formData.phone
                    ? 'border-purple-500 dark:border-purple-400'
                    : 'border-gray-300 dark:border-white/20'
                } ${
                  errors.phone ? 'border-red-500 dark:border-red-400' : ''
                }`}
                placeholder=" "
              />
              <Label
                htmlFor="phone"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'phone' || formData.phone
                    ? 'top-2 text-sm text-purple-600 dark:text-purple-400'
                    : 'top-1/2 -translate-y-1/2 text-lg text-gray-500 dark:text-white/50'
                }`}
              >
                {t("contact.fields.phone")}
              </Label>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Service Type Field */}
            <div className="relative">
              <Select
                value={formData.serviceType}
                onValueChange={(value) => handleInputChange('serviceType', value)}
              >
                <SelectTrigger className={`h-14 px-4 text-lg bg-transparent border-2 transition-all duration-300 ${
                  formData.serviceType
                    ? 'border-purple-500 dark:border-purple-400'
                    : 'border-gray-300 dark:border-white/20'
                } ${
                  errors.serviceType ? 'border-red-500 dark:border-red-400' : ''
                }`}>
                  <SelectValue placeholder={t("contact.fields.servicePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">{t("contact.services.consultation")}</SelectItem>
                  <SelectItem value="quote">{t("contact.services.quote")}</SelectItem>
                  <SelectItem value="partnership">{t("contact.services.partnership")}</SelectItem>
                  <SelectItem value="other">{t("contact.services.other")}</SelectItem>
                </SelectContent>
              </Select>
              {errors.serviceType && (
                <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {errors.serviceType}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="flex-1 h-14 text-lg font-medium rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t("contact.submitting")}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {t("contact.submit")}
                  </div>
                )}
              </Button>

              <Button
                type="button"
                onClick={handleQuickCall}
                variant="outline"
                className="flex-1 h-14 text-lg font-medium rounded-xl border-2 border-gray-300 dark:border-white/20 hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {t("contact.quickCall")}
                </div>
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
