// src/sections/S02_Journey/Journey.jsx
import React, { useState } from 'react'
import { experience, journeyClosing } from '../../data/experience.js'
import styles from './Journey.module.css'

export default function Journey({ isActive, goTo }) {
  const [selectedId, setSelectedId] = useState(experience[experience.length - 1].id)

  return (
    <section
      id="journey"
      className={styles.section}
      aria-label="Career journey & delivery track record"
    >
      <div className={styles.headerRow}>
        <div>
          <p className={styles.kicker}>02 — Executive Track Record</p>
          <h2 className={styles.heading}>From hands-on engineering to enterprise architecture and leadership.</h2>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.summaryBadge}>
            <span className={styles.summaryValue}>19+ Years</span>
            <span className={styles.summaryDesc}>Continuous Value Delivery in Insurance & Enterprise</span>
          </div>
          <button className={styles.homeBtn} onClick={() => goTo(0)} aria-label="Back to home">← Home</button>
        </div>
      </div>

      <div className={styles.timeline} role="list">
        {experience.map((item) => {
          const isSelected = item.id === selectedId
          const isCurrent = item.id === 'architect'

          return (
            <div
              key={item.id}
              className={`${styles.card} ${isCurrent ? styles.isCurrent : ''} ${isSelected ? styles.isSelected : ''}`}
              role="listitem"
              onClick={() => setSelectedId(item.id)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedId(item.id)}
            >
              <div className={styles.cardTop}>
                <span className={styles.themeBadge}>{item.theme}</span>
                <span className={styles.period}>{item.period}</span>
              </div>

              <p className={styles.role}>{item.title}</p>
              <p className={styles.org}>{item.org}</p>
              <p className={styles.context}>{item.context}</p>

              {item.impact && (
                <p className={styles.impactSnippet}>{item.impact}</p>
              )}

              {item.skills && (
                <div className={styles.skillChips}>
                  {item.skills.map((s) => (
                    <span key={s} className={styles.skillChip}>{s}</span>
                  ))}
                </div>
              )}

              {item.highlight && (
                <span className={styles.highlight}>★ {item.highlight}</span>
              )}
            </div>
          )
        })}
      </div>

      <div className={styles.footerRow}>
        <div className={styles.themes} aria-hidden="true">
          <span className={styles.arcPill}>BUILD</span>
          <span className={styles.arcArrow}>→</span>
          <span className={styles.arcPill}>LEAD</span>
          <span className={styles.arcArrow}>→</span>
          <span className={styles.arcPill}>DELIVER</span>
          <span className={styles.arcArrow}>→</span>
          <span className={styles.arcPill}>TRANSFORM ($5M)</span>
          <span className={styles.arcArrow}>→</span>
          <span className={`${styles.arcPill} ${styles.arcCurrent}`}>ARCHITECT & AI</span>
        </div>
        <p className={styles.closing}>
          "The technology changed. The responsibility grew with it."
        </p>
      </div>
    </section>
  )
}
