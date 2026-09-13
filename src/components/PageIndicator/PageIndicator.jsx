// src/components/PageIndicator/PageIndicator.jsx
import React from 'react'
import { TOTAL_SCREENS } from '../../data/config.js'
import styles from './PageIndicator.module.css'

export default function PageIndicator({ activeIndex, goTo, goPrev, goNext }) {
  const current = String(activeIndex + 1).padStart(2, '0')
  const total = String(TOTAL_SCREENS).padStart(2, '0')

  return (
    <nav className={styles.indicator} aria-label="Slide navigation">
      <button
        className={styles.navBtn}
        onClick={goPrev}
        disabled={activeIndex === 0}
        aria-label="Previous section"
      >
        ←
      </button>

      <div className={styles.dots} role="list">
        {Array.from({ length: TOTAL_SCREENS }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to section ${i + 1}`}
            aria-current={i === activeIndex ? 'true' : undefined}
            role="listitem"
          />
        ))}
      </div>

      <span className={styles.counter} aria-live="polite" aria-atomic="true">
        {current} / {total}
      </span>

      <button
        className={styles.navBtn}
        onClick={goNext}
        disabled={activeIndex === TOTAL_SCREENS - 1}
        aria-label="Next section"
      >
        →
      </button>
    </nav>
  )
}
