export class MotionSystem {
  constructor() {
    this.init()
  }

  private init(): void {
    this.setupScrollCoordinator()
    this.setupSectionEntryAnimations()
    this.setupCardHoverEffects()
  }

  private setupScrollCoordinator(): void {
    // Consolidate all scroll-based effects into a single coordinated handler
    const hero = document.querySelector('.bg-hero') as HTMLElement
    const logo = document.querySelector('.logo-gmg') as HTMLElement
    const headerLogo = document.querySelector('header img.flame-animate') as HTMLElement
    const heroTitle = document.querySelector('.hero-title') as HTMLElement
    const heroSubtitle = document.querySelector('.hero-title + p') as HTMLElement
    const heroTitleParent = document.querySelector('.hero-title')
    const heroBadges = heroTitleParent?.closest('.container-max')?.querySelector('.mt-16') as HTMLElement
    const footer = document.querySelector('footer') as HTMLElement

    if (footer) {
      footer.classList.add('footer-reveal')
    }

    let lastScroll = 0
    let ticking = false

    const handleScroll = () => {
      const scrollY = window.scrollY
      const velocity = Math.abs(scrollY - lastScroll)
      lastScroll = scrollY

      // Hero Parallax Effects
      if (hero) {
        const heroHeight = hero.offsetHeight
        
        if (scrollY < heroHeight) {
          hero.style.transform = `translateY(${scrollY * 0.5}px)`

          if (logo) {
            const scale = 1 + (scrollY * 0.0003)
            logo.style.transform = `translateY(${scrollY * 0.3}px) scale(${scale})`
          }

          if (heroTitle) {
            const opacity = Math.max(1 - scrollY / 400, 0)
            heroTitle.style.opacity = opacity.toString()
          }

          if (heroSubtitle) {
            const opacity = Math.max(1 - scrollY / 350, 0)
            heroSubtitle.style.opacity = opacity.toString()
          }

          if (heroBadges) {
            const opacity = Math.max(1 - scrollY / 300, 0)
            heroBadges.style.opacity = opacity.toString()
          }
        }
      }

      // Reactive Flame Animation
      const glowIntensity = Math.min(velocity / 15, 16)
      const glowColor = `rgba(40, 146, 229, ${Math.min(0.3 + velocity / 100, 0.8)})`

      if (logo && scrollY < window.innerHeight) {
        logo.style.filter = `drop-shadow(0 0 ${6 + glowIntensity}px ${glowColor})`
      }

      if (headerLogo) {
        headerLogo.style.filter = `drop-shadow(0 0 ${4 + glowIntensity * 0.5}px ${glowColor})`
      }

      // Footer Reveal
      if (footer) {
        const trigger = document.body.scrollHeight - window.innerHeight - 400
        
        if (scrollY > trigger) {
          footer.classList.add('footer-visible')
        } else {
          footer.classList.remove('footer-visible')
        }
      }

      ticking = false
    }

    const requestScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestScroll, { passive: true })
    
    // Initialize on load to ensure correct state on page reload or deep links
    handleScroll()
  }


  private setupSectionEntryAnimations(): void {
    const sections = document.querySelectorAll('.fade-section')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    sections.forEach(section => observer.observe(section))

    // Add fade-section class to all service cards, section titles, and cards
    document.querySelectorAll('.service-card, .section-title, .card, form').forEach(el => {
      if (!el.classList.contains('fade-section')) {
        el.classList.add('fade-section')
        observer.observe(el)
      }
    })
  }

  private setupCardHoverEffects(): void {
    // Ensure all cards have proper overflow and position for hover effects
    const cards = document.querySelectorAll<HTMLElement>('.service-card, .card')
    cards.forEach(card => {
      card.style.position = 'relative'
      card.style.overflow = 'hidden'
    })
  }

}
