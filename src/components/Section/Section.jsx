// src/components/Section/Section.jsx
import React from 'react'
import styles from './Section.module.css'

/**
 * Shared section wrapper.
 * isActive: whether this slide is currently visible (used for entrance animations).
 */
export default function Section({ id, isActive, children, className = '' }) {
  return (
    <section
      id={id}
      className={`${styles.section} ${className}`}
      aria-hidden={!isActive}
      tabIndex={isActive ? -1 : undefined}
    >
      {children}
    </section>
  )
}
