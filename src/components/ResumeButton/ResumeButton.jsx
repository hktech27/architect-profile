// src/components/ResumeButton/ResumeButton.jsx
import React from 'react'
import { siteConfig } from '../../data/config.js'
import styles from './ResumeButton.module.css'

/**
 * ResumeButton — renders an anchor download link if resumePath is set,
 * or a disabled button with tooltip if not yet configured.
 *
 * variant: 'primary' | 'ghost'
 */
export default function ResumeButton({ variant = 'primary', label = 'Resume ↓' }) {
  const { resumePath } = siteConfig

  if (resumePath) {
    return (
      <a
        href={resumePath}
        download="Himanshu-Khatri-Resume.pdf"
        className={`${styles.btn} ${styles.primary}`}
        aria-label="Download resume PDF"
      >
        {label}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles.disabled}`}
      disabled
      title="Resume will be available shortly"
      aria-label="Resume download — coming soon"
    >
      {label}
    </button>
  )
}
