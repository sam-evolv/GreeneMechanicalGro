import './styles.css'
import { siteConfig } from '../site.config'
import { MotionSystem } from './motion'

class GMGWebsite {
  private header: HTMLElement | null = null
  private observer: IntersectionObserver | null = null

  constructor() {
    this.init()
  }

  private init(): void {
    this.populateContactInfo()
    this.updateSchemaOrg()
    this.setupStickyHeader()
    this.setupSmoothScroll()
    this.setupRevealAnimations()
    this.setupHeroAnimations()
    this.setupFormHandler()
  }

  private updateSchemaOrg(): void {
    const schemaScript = document.querySelector('script[type="application/ld+json"]')
    if (schemaScript) {
      const locality = siteConfig.address.split(',')[0].trim()
      const areaName = siteConfig.serviceArea.split('&')[0].trim()
      
      const schema = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "name": siteConfig.company,
        "alternateName": siteConfig.short,
        "description": siteConfig.meta.description,
        "url": siteConfig.meta.siteUrl,
        "telephone": siteConfig.phoneE164,
        "email": siteConfig.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": locality,
          "addressCountry": "IE"
        },
        "areaServed": {
          "@type": "City",
          "name": areaName,
          "containedIn": {
            "@type": "Country",
            "name": "IE"
          }
        },
        "openingHours": siteConfig.hours.replace(/Mon-Fri/i, 'Mo-Fr').replace(/\s+/g, ' '),
        "sameAs": [],
        "priceRange": "$$"
      }
      schemaScript.textContent = JSON.stringify(schema, null, 2)
    }
  }

  private populateContactInfo(): void {
    document.querySelectorAll('[data-phone]').forEach(el => {
      if (el instanceof HTMLAnchorElement) {
        el.href = `tel:${siteConfig.phoneE164}`
      }
      if (el.hasAttribute('data-phone-display')) {
        el.textContent = siteConfig.phoneDisplay
      }
    })

    document.querySelectorAll('[data-email]').forEach(el => {
      if (el instanceof HTMLAnchorElement) {
        el.href = `mailto:${siteConfig.email}`
      }
      if (el.hasAttribute('data-email-display')) {
        el.textContent = siteConfig.email
      }
    })

    const serviceAreaEl = document.querySelector('[data-service-area]')
    if (serviceAreaEl) serviceAreaEl.textContent = siteConfig.serviceArea

    const hoursEl = document.querySelector('[data-hours]')
    if (hoursEl) hoursEl.textContent = siteConfig.hours

    const taglineEl = document.querySelector('[data-tagline]')
    if (taglineEl) taglineEl.textContent = siteConfig.tagline
  }

  private setupStickyHeader(): void {
    this.header = document.querySelector('header')
    if (!this.header) return
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset

      if (currentScroll > 100) {
        this.header?.classList.add('header-scrolled')
      } else {
        this.header?.classList.remove('header-scrolled')
      }
    }, { passive: true })
  }

  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (!href || href === '#') return

        const target = document.querySelector(href)
        if (target) {
          const headerOffset = 80
          const elementPosition = target.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      })
    })
  }

  private setupHeroAnimations(): void {
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.stagger-1, .stagger-2, .stagger-3, .stagger-4')
      heroElements.forEach((el) => {
        el.classList.add('active')
      })
    }, 300)
  }

  private setupRevealAnimations(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            this.observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
      }
    )

    document.querySelectorAll('.reveal').forEach(el => {
      if (!el.classList.contains('stagger-1') && 
          !el.classList.contains('stagger-2') && 
          !el.classList.contains('stagger-3') && 
          !el.classList.contains('stagger-4')) {
        this.observer?.observe(el)
      }
    })
  }

  private setupFormHandler(): void {
    const form = document.querySelector('#quote-form') as HTMLFormElement
    if (!form) return

    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const formData = new FormData(form)
      const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement
      const originalText = submitBtn.textContent

      try {
        submitBtn.disabled = true
        submitBtn.textContent = 'Sending...'

        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString()
        })

        if (response.ok) {
          this.showSuccessMessage(form)
          form.reset()
        } else {
          throw new Error('Form submission failed')
        }
      } catch (error) {
        alert('Sorry, there was an error submitting the form. Please call us directly.')
      } finally {
        submitBtn.disabled = false
        submitBtn.textContent = originalText || 'Send Message'
      }
    })
  }

  private showSuccessMessage(form: HTMLFormElement): void {
    const existingMessage = form.querySelector('.success-message')
    if (existingMessage) existingMessage.remove()

    const message = document.createElement('div')
    message.className = 'success-message'
    message.innerHTML = `
      <p class="font-semibold">Thank you for your enquiry!</p>
      <p class="text-sm mt-1">We'll get back to you within 24 hours.</p>
    `

    form.insertAdjacentElement('beforebegin', message)

    setTimeout(() => {
      message.remove()
    }, 8000)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GMGWebsite()
  new MotionSystem()
})
