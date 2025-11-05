/**
 * GMG Website - Plain JavaScript
 * No dependencies, mobile-first, accessibility-compliant
 */

(function() {
  'use strict';

  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  
  function setupMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const siteNav = document.getElementById('site-nav');
    
    if (!navToggle || !siteNav) return;
    
    // Get all focusable elements in the nav
    function getFocusableElements() {
      const selectors = 'a[href], button:not([disabled])';
      return Array.from(siteNav.querySelectorAll(selectors));
    }
    
    // Focus trap when menu is open
    function trapFocus(e) {
      if (e.key !== 'Tab') return;
      
      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
    
    // Toggle menu
    function toggleMenu() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.setAttribute('aria-expanded', !isExpanded);
      
      if (isExpanded) {
        // Close menu
        siteNav.setAttribute('hidden', '');
        document.body.style.overflow = '';
        siteNav.removeEventListener('keydown', trapFocus);
      } else {
        // Open menu
        siteNav.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        siteNav.addEventListener('keydown', trapFocus);
        
        // Focus first link
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    }
    
    // Close menu
    function closeMenu() {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.setAttribute('hidden', '');
      document.body.style.overflow = '';
      siteNav.removeEventListener('keydown', trapFocus);
    }
    
    // Event listeners
    navToggle.addEventListener('click', toggleMenu);
    
    // Close on nav link click
    const navLinks = siteNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
        navToggle.focus();
      });
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        navToggle.focus();
      }
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (
        navToggle.getAttribute('aria-expanded') === 'true' &&
        !siteNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMenu();
        navToggle.focus();
      }
    });
  }
  
  // ========================================
  // Smooth Scrolling for Anchor Links
  // ========================================
  
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignore empty anchors
        if (href === '#') {
          e.preventDefault();
          return;
        }
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          // Account for fixed header
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus();
          target.removeAttribute('tabindex');
        }
      });
    });
  }
  
  // ========================================
  // Header Scroll Effect
  // ========================================
  
  function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    let lastScroll = 0;
    
    function updateHeader() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.background = 'rgba(17, 19, 23, 0.95)';
      } else {
        header.style.background = 'rgba(17, 19, 23, 0.7)';
      }
      
      lastScroll = currentScroll;
    }
    
    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeader();
          ticking = false;
        });
        ticking = true;
      }
    });
  }
  
  // ========================================
  // Form Enhancement
  // ========================================
  
  function setupFormEnhancement() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    // Add loading state on submit
    form.addEventListener('submit', function() {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }
    });
  }
  
  // ========================================
  // Initialize on DOM Ready
  // ========================================
  
  function init() {
    setupMobileNav();
    setupSmoothScroll();
    setupHeaderScroll();
    setupFormEnhancement();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
