// src/components/Header/Header.jsx
import React, { useState } from 'react'
import { navItems, siteConfig } from '../../data/config.js'
import ResumeButton from '../ResumeButton/ResumeButton.jsx'
import styles from './Header.module.css'

export default function Header({ activeIndex, goTo, isDark, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (index) => {
    goTo(index)
    setMobileOpen(false)
  }

  return (
    <>
      <header className={styles.header} role="banner">
        <button
          className={styles.monogram}
          onClick={() => handleNavClick(0)}
          aria-label="Go to profile"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1H15v-5h-6v5H4a1 1 0 01-1-1V9.5z" fill="currentColor"/>
          </svg>
        </button>

        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.index}
              className={`${styles.navLink} ${activeIndex === item.index ? styles.active : ''}`}
              onClick={() => handleNavClick(item.index)}
              aria-current={activeIndex === item.index ? 'true' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? '☀' : '◑'}
          </button>
          <ResumeButton variant="primary" label="Resume ↓" />
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`} aria-hidden={!mobileOpen}>
        <button
          className={`${styles.mobileNavLink} ${activeIndex === 0 ? styles.active : ''}`}
          onClick={() => handleNavClick(0)}
        >
          Profile
        </button>
        {navItems.map((item) => (
          <button
            key={item.index}
            className={`${styles.mobileNavLink} ${activeIndex === item.index ? styles.active : ''}`}
            onClick={() => handleNavClick(item.index)}
          >
            {item.label}
          </button>
        ))}
        <div className={styles.mobileActions}>
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀ Light Mode' : '◑ Dark Mode'}
          </button>
        </div>
      </div>
    </>
  )
}
