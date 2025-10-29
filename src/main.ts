import './styles.css'
import { siteConfig } from '../site.config'

class GMGWebsite {
  private header: HTMLElement | null = null
  private observer: IntersectionObserver | null = null

  constructor() {
    this.init()
  }

  private init(): void {
    this.setupStickyHeader()
    this.setupSmoothScroll()
    this.setupRevealAnimations()
    this.setupFormHandler()
  }

  private setupStickyHeader(): void {
    this.header = document.querySelector('header')
    if (!this.header) return

    let lastScroll = 0

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset

      if (currentScroll > 100) {
        this.header?.classList.add('header-scrolled')
      } else {
        this.header?.classList.remove('header-scrolled')
      }

      lastScroll = currentScroll
    })
  }

  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (!href) return

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
        rootMargin: '0px 0px -50px 0px'
      }
    )

    document.querySelectorAll('.reveal').forEach(el => {
      this.observer?.observe(el)
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
})
