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
          aria-label="Go to introduction"
        >
          {siteConfig.initials || 'HRK'}
        </button>

        {activeIndex > 0 && (
          <button
            className={styles.homeBtn}
            onClick={() => handleNavClick(0)}
            aria-label="Back to home"
          >
            ← Home
          </button>
        )}

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
          Introduction
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
          <ResumeButton variant="primary" label="Resume ↓" />
        </div>
      </div>
    </>
  )
}
