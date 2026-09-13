// src/components/ResumeButton/ResumeButton.jsx
import React from 'react'
import { siteConfig } from '../../data/config.js'
import styles from './ResumeButton.module.css'

/**
 * ResumeButton — triggers download of all configured resume files on click.
 * Downloads both 1-page and full resume simultaneously.
 */
export default function ResumeButton({ label = 'Resume ↓' }) {
  const { resumePaths } = siteConfig

  const handleClick = () => {
    if (!resumePaths?.length) return
    resumePaths.forEach(({ file, name }) => {
      const a = document.createElement('a')
      a.href = file
      a.download = name
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    })
  }

  if (resumePaths?.length) {
    return (
      <button
        type="button"
        className={`${styles.btn} ${styles.primary}`}
        onClick={handleClick}
        aria-label="Download resume — 1-page and full version"
        title="Downloads both 1-page and full resume"
      >
        {label}
      </button>
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
