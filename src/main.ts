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
    this.setupCustomDropdown()
    this.setupFormHandler()
    this.setupMobileMenu()
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

  private setupCustomDropdown(): void {
    const dropdown = document.getElementById('service-dropdown')
    if (!dropdown) return

    const trigger = dropdown.querySelector('.dropdown-trigger') as HTMLButtonElement
    const menu = dropdown.querySelector('.dropdown-menu') as HTMLUListElement
    const options = dropdown.querySelectorAll('[role="option"]')
    const hiddenInput = document.getElementById('service-input') as HTMLInputElement
    const textEl = dropdown.querySelector('.dropdown-text') as HTMLSpanElement

    if (!trigger || !menu || !hiddenInput || !textEl) return

    let isOpen = false
    let focusedIndex = -1

    const openMenu = () => {
      isOpen = true
      trigger.setAttribute('aria-expanded', 'true')
      menu.classList.add('open')
      focusedIndex = -1
    }

    const closeMenu = () => {
      isOpen = false
      trigger.setAttribute('aria-expanded', 'false')
      menu.classList.remove('open')
      focusedIndex = -1
    }

    const selectOption = (option: Element) => {
      const value = option.getAttribute('data-value') || ''
      const text = option.textContent || ''
      
      hiddenInput.value = value
      textEl.textContent = text
      textEl.classList.add('selected')
      
      options.forEach(opt => opt.setAttribute('aria-selected', 'false'))
      option.setAttribute('aria-selected', 'true')
      
      closeMenu()
      trigger.focus()
    }

    const focusOption = (index: number) => {
      if (index < 0) index = options.length - 1
      if (index >= options.length) index = 0
      focusedIndex = index
      
      options.forEach((opt, i) => {
        if (i === index) {
          (opt as HTMLElement).classList.add('focused')
          opt.scrollIntoView({ block: 'nearest' })
        } else {
          (opt as HTMLElement).classList.remove('focused')
        }
      })
    }

    trigger.addEventListener('click', () => {
      if (isOpen) {
        closeMenu()
      } else {
        openMenu()
      }
    })

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (!isOpen) openMenu()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (!isOpen) openMenu()
        focusOption(0)
      } else if (e.key === 'Escape' && isOpen) {
        closeMenu()
      }
    })

    menu.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        focusOption(focusedIndex + 1)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        focusOption(focusedIndex - 1)
      } else if (e.key === 'Enter' && focusedIndex >= 0) {
        e.preventDefault()
        selectOption(options[focusedIndex])
      } else if (e.key === 'Escape') {
        closeMenu()
        trigger.focus()
      }
    })

    options.forEach((option, index) => {
      option.addEventListener('click', () => selectOption(option))
      option.addEventListener('mouseenter', () => focusOption(index))
    })

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target as Node) && isOpen) {
        closeMenu()
      }
    })
  }

  private setupFormHandler(): void {
    const form = document.querySelector('#contact-form') as HTMLFormElement
    if (!form) return

    const serviceInput = document.getElementById('service-input') as HTMLInputElement
    const dropdownText = document.querySelector('.dropdown-text') as HTMLSpanElement

    form.addEventListener('submit', (e) => {
      if (!serviceInput.value) {
        e.preventDefault()
        alert('Please select a service.')
        return
      }
    })

    const resetDropdown = () => {
      if (serviceInput) serviceInput.value = ''
      if (dropdownText) {
        dropdownText.textContent = 'Select a service'
        dropdownText.classList.remove('selected')
      }
      document.querySelectorAll('[role="option"]').forEach(opt => {
        opt.setAttribute('aria-selected', 'false')
      })
    }

    form.addEventListener('reset', resetDropdown)
  }

  private setupMobileMenu(): void {
    const menuButton = document.getElementById('mobile-menu-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const hamburgerIcon = document.getElementById('hamburger-icon')
    const closeIcon = document.getElementById('close-icon')
    const menuLinks = document.querySelectorAll('.mobile-menu-link')

    if (!menuButton || !mobileMenu || !hamburgerIcon || !closeIcon) return

    const getFocusableElements = (): HTMLElement[] => {
      const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      return Array.from(mobileMenu.querySelectorAll(focusableSelectors)) as HTMLElement[]
    }

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      
      const focusableElements = getFocusableElements()
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    const toggleMenu = () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true'
      
      menuButton.setAttribute('aria-expanded', (!isExpanded).toString())
      
      if (isExpanded) {
        mobileMenu.setAttribute('hidden', '')
        hamburgerIcon.classList.remove('hidden')
        closeIcon.classList.add('hidden')
        document.body.style.overflow = ''
        mobileMenu.removeEventListener('keydown', trapFocus)
      } else {
        mobileMenu.removeAttribute('hidden')
        hamburgerIcon.classList.add('hidden')
        closeIcon.classList.remove('hidden')
        document.body.style.overflow = 'hidden'
        mobileMenu.addEventListener('keydown', trapFocus)
        
        const focusableElements = getFocusableElements()
        if (focusableElements.length > 0) {
          focusableElements[0].focus()
        }
      }
    }

    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false')
      mobileMenu.setAttribute('hidden', '')
      hamburgerIcon.classList.remove('hidden')
      closeIcon.classList.add('hidden')
      document.body.style.overflow = ''
      mobileMenu.removeEventListener('keydown', trapFocus)
    }

    menuButton.addEventListener('click', toggleMenu)

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu()
        menuButton.focus()
      })
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu()
        menuButton.focus()
      }
    })

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (
        menuButton.getAttribute('aria-expanded') === 'true' &&
        !mobileMenu.contains(target) &&
        !menuButton.contains(target)
      ) {
        closeMenu()
        menuButton.focus()
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GMGWebsite()
  new MotionSystem()
})
