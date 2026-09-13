// src/components/ArchDiagramPlaceholder/ArchDiagramPlaceholder.jsx
import React from 'react'
import styles from './ArchDiagramPlaceholder.module.css'

/**
 * Renders a sanitized architecture diagram image, or a "coming soon" placeholder
 * if imagePath is empty.
 *
 * imagePath: full public path e.g. '/architect-profile/architecture/state-street.png'
 * alt: accessible description of the diagram
 */
export default function ArchDiagramPlaceholder({ imagePath, alt, title }) {
  if (!imagePath) {
    return (
      <div className={styles.placeholder} role="img" aria-label={`Architecture diagram for ${title} — coming soon`}>
        <span className={styles.icon} aria-hidden="true">⬡</span>
        <p className={styles.text}>Architecture diagram</p>
        <p className={styles.hint}>
          Place your sanitized diagram image in{' '}
          <code>public/architecture/</code> and update{' '}
          <code>src/data/architectureCases.js</code>
        </p>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <img
        src={imagePath}
        alt={alt || `Architecture diagram — ${title}`}
        className={styles.image}
        loading="lazy"
      />
    </div>
  )
}
