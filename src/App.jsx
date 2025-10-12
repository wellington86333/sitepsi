import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Sun, Users, Lightbulb, Brain, Sparkles, Menu, X, Phone, Mail, Clock, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import therapyOffice1 from './assets/therapy-office-1.webp'
import therapyOffice2 from './assets/therapy-office-2.webp'
import { translations } from './translations.js'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState('pt')
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)

  const t = translations[language]

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setLanguageMenuOpen(false)
  }

  const services = [
    {
      icon: Heart,
      title: t.services.service1Title,
      description: t.services.service1Desc,
      price: `${t.services.priceFrom} R$ 50`,
      color: 'text-[#87A96B]'
    },
    {
      icon: Sun,
      title: t.services.service2Title,
      description: t.services.service2Desc,
      price: `${t.services.priceFrom} R$ 50`,
      color: 'text-[#D4A574]'
    },
    {
      icon: Users,
      title: t.services.service3Title,
      description: t.services.service3Desc,
      price: `${t.services.priceFrom} R$ 60`,
      color: 'text-[#6B8E8E]'
    },
    {
      icon: Lightbulb,
      title: t.services.service4Title,
      description: t.services.service4Desc,
      price: `${t.services.priceFrom} R$ 50`,
      color: 'text-[#87A96B]'
    },
    {
      icon: Brain,
      title: t.services.service5Title,
      description: t.services.service5Desc,
      price: `${t.services.priceFrom} R$ 50`,
      color: 'text-[#D4A574]'
    },
    {
      icon: Sparkles,
      title: t.services.service6Title,
      description: t.services.service6Desc,
      price: `${t.services.priceFrom} R$ 50`,
      color: 'text-[#6B8E8E]'
    }
  ]

  const testimonials = [
    {
      name: 'Maria S.',
      text: t.testimonials.testimonial1,
      location: language === 'pt' ? 'Estados Unidos' : language === 'en' ? 'United States' : language === 'es' ? 'Estados Unidos' : 'Vereinigte Staaten'
    },
    {
      name: 'Pedro R.',
      text: t.testimonials.testimonial2,
      location: 'Portugal'
    },
    {
      name: 'Ana C.',
      text: t.testimonials.testimonial3,
      location: language === 'pt' ? 'Canadá' : language === 'en' ? 'Canada' : language === 'es' ? 'Canadá' : 'Kanada'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F5F3] to-[#E8E6E1]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="font-display text-xl font-semibold text-[#5D4E37]">
                Wellington Brito <span className="text-[#87A96B]">- Psicólogo</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link text-[#5D4E37] hover:text-[#87A96B] px-3 py-2 text-sm font-medium">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('sobre')} className="nav-link text-[#5D4E37] hover:text-[#87A96B] px-3 py-2 text-sm font-medium">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('servicos')} className="nav-link text-[#5D4E37] hover:text-[#87A96B] px-3 py-2 text-sm font-medium">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('contato')} className="nav-link text-[#5D4E37] hover:text-[#87A96B] px-3 py-2 text-sm font-medium">
                {t.nav.contact}
              </button>
              
              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center space-x-2 text-[#5D4E37] hover:text-[#87A96B] px-3 py-2 text-sm font-medium transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{languages.find(l => l.code === language)?.flag}</span>
                </button>
                
                <AnimatePresence>
                  {languageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#87A96B]/20 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-3 hover:bg-[#87A96B]/10 transition-colors flex items-center space-x-3 ${
                            language === lang.code ? 'bg-[#87A96B]/5 text-[#87A96B]' : 'text-[#5D4E37]'
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="text-[#5D4E37] hover:text-[#87A96B] p-2"
              >
                <Globe className="h-5 w-5" />
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#5D4E37] hover:text-[#87A96B]">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Language Menu */}
        <AnimatePresence>
          {languageMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-[#87A96B]/20"
            >
              <div className="px-2 py-2 grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-2 rounded-lg flex items-center space-x-2 justify-center transition-colors ${
                      language === lang.code ? 'bg-[#87A96B] text-white' : 'bg-[#F7F5F3] text-[#5D4E37] hover:bg-[#87A96B]/10'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-[#87A96B]/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-[#5D4E37] hover:text-[#87A96B]">{t.nav.home}</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-3 py-2 text-[#5D4E37] hover:text-[#87A96B]">{t.nav.about}</button>
              <button onClick={() => scrollToSection('servicos')} className="block w-full text-left px-3 py-2 text-[#5D4E37] hover:text-[#87A96B]">{t.nav.services}</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-3 py-2 text-[#5D4E37] hover:text-[#87A96B]">{t.nav.contact}</button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 hero-gradient"></div>
        <img src={therapyOffice1} alt={t.hero.imageAlt} 
             className="absolute inset-0 w-full h-full object-cover opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              key={language}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="floating-element mb-6">
                <h1 className="font-display text-4xl md:text-6xl font-bold text-[#5D4E37] mb-6 leading-tight">
                  {t.hero.title1}
                  <span className="gradient-text block">{t.hero.title2}</span>
                  {t.hero.title3}
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-[#5D4E37]/80 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-[#87A96B] text-white px-8 py-6 text-lg rounded-lg font-semibold hover:bg-[#87A96B]/90 transition-all duration-300 transform hover:scale-105"
                >
                  {t.hero.cta1}
                </Button>
                <Button 
                  onClick={() => scrollToSection('servicos')}
                  variant="outline"
                  className="border-2 border-[#87A96B] text-[#87A96B] px-8 py-6 text-lg rounded-lg font-semibold hover:bg-[#87A96B] hover:text-white transition-all duration-300"
                >
                  {t.hero.cta2}
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#87A96B]/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#87A96B]">500+</div>
                  <div className="text-sm text-[#5D4E37]/70">{t.hero.stats.sessions}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D4A574]">3 {language === 'pt' ? 'anos' : language === 'en' ? 'years' : language === 'es' ? 'años' : 'Jahre'}</div>
                  <div className="text-sm text-[#5D4E37]/70">{t.hero.stats.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#6B8E8E]">100%</div>
                  <div className="text-sm text-[#5D4E37]/70">{t.hero.stats.confidentiality}</div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Content - Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={therapyOffice2} alt={t.hero.imageAlt} 
                     className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">{t.hero.imageAlt}</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#87A96B]/20 rounded-full floating-element"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#D4A574]/20 rounded-full floating-element" style={{animationDelay: '-2s'}}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            key={`about-${language}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
              {t.about.title} <span className="text-[#87A96B]">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-lg text-[#5D4E37]/70 max-w-3xl mx-auto">
              {t.about.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-[#87A96B]/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#87A96B]">{t.about.card1Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5D4E37]/70">
                    {t.about.card1Text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-[#D4A574]/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#D4A574]">{t.about.card2Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5D4E37]/70">
                    {t.about.card2Text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-[#6B8E8E]/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#6B8E8E]">{t.about.card3Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5D4E37]/70">
                    {t.about.card3Text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-white to-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            key={`services-${language}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
              {t.services.title} <span className="text-[#87A96B]">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-lg text-[#5D4E37]/70 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={`${language}-service-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="service-card bg-white border-[#87A96B]/10 h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-[#87A96B]/10 rounded-lg flex items-center justify-center mb-4`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-display text-[#5D4E37]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#5D4E37]/70 mb-4">
                      {service.description}
                    </CardDescription>
                    <div className={`text-sm ${service.color} font-medium`}>{service.price}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            key={`testimonials-${language}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
              {t.testimonials.title} <span className="text-[#87A96B]">{t.testimonials.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${language}-testimonial-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-[#87A96B]/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-[#5D4E37]">{testimonial.name}</CardTitle>
                    <CardDescription className="text-[#87A96B]">{testimonial.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5D4E37]/70 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-white to-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            key={`contact-${language}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#5D4E37] mb-4">
              {t.contact.title} <span className="text-[#87A96B]">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-lg text-[#5D4E37]/70 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="border-[#87A96B]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#87A96B] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#5D4E37] mb-1">{t.contact.whatsapp}</h3>
                      <p className="text-[#5D4E37]/70">+55 (81) 99690-3004</p>
                      <p className="text-sm text-[#87A96B] mt-2">{t.contact.whatsappAvailable}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#D4A574]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#D4A574] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#5D4E37] mb-1">{t.contact.email}</h3>
                      <p className="text-[#5D4E37]/70">wellington.brito@rocketmail.com</p>
                      <p className="text-sm text-[#D4A574] mt-2">{t.contact.emailResponse}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#6B8E8E]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[#6B8E8E] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#5D4E37] mb-1">{t.contact.schedule}</h3>
                      <p className="text-[#5D4E37]/70">{t.contact.scheduleWeekday}</p>
                      <p className="text-[#5D4E37]/70">{t.contact.scheduleSaturday}</p>
                      <p className="text-sm text-[#6B8E8E] mt-2">{t.contact.scheduleTimezone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-[#87A96B]/20 h-full">
                <CardHeader>
                  <CardTitle className="text-[#5D4E37]">{t.contact.infoTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#5D4E37] mb-2">{t.contact.crp}</h4>
                    <p className="text-[#5D4E37]/70">02/15189</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5D4E37] mb-2">{t.contact.modality}</h4>
                    <p className="text-[#5D4E37]/70">{t.contact.modalityText}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5D4E37] mb-2">{t.contact.values}</h4>
                    <p className="text-[#5D4E37]/70">{t.contact.valuesText}</p>
                  </div>
                  <div className="pt-4 border-t border-[#87A96B]/20">
                    <p className="text-sm text-[#5D4E37]/60">
                      <strong>{t.contact.warning}</strong> {t.contact.warningText}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5D4E37] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-display text-xl font-semibold mb-2">Wellington Brito - Psicólogo</h3>
            <p className="text-white/70 mb-4">CRP 02/15189</p>
            <p className="text-sm text-white/60">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

