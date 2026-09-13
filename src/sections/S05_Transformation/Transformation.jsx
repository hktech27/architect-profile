// src/sections/S05_Transformation/Transformation.jsx
import React, { useState } from 'react'
import { transformationMilestones, transformationStatement } from '../../data/transformation.js'
import styles from './Transformation.module.css'

export default function Transformation({ isActive, goTo }) {
  const [activeId, setActiveId] = useState(transformationMilestones[0].id)

  const active = transformationMilestones.find((m) => m.id === activeId)

  return (
    <section
      id="transformation"
      className={styles.section}
      aria-label="Enterprise transformation roadmap & track record"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>05 — Enterprise Transformation Arc</p>
          <h2 className={styles.heading}>A decade of enterprise transformation — from core platforms to cloud.</h2>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.experienceBadge}>
            <span className={styles.badgeLabel}>End-to-End Modernization Lifecycle</span>
          </div>
          <button className={styles.homeBtn} onClick={() => goTo(0)} aria-label="Back to home">← Home</button>
        </div>
      </div>

      <div className={styles.track} role="region" aria-label="Modernization Roadmap">
        <div className={styles.rail} aria-hidden="true" />

        <div className={styles.milestones} role="list">
          {transformationMilestones.map((item) => (
            <div
              key={item.id}
              className={`${styles.milestone} ${item.id === activeId ? styles.active : ''}`}
              role="listitem"
              onClick={() => setActiveId(item.id)}
              onKeyDown={(e) => e.key === 'Enter' && setActiveId(item.id)}
              tabIndex={0}
              aria-pressed={item.id === activeId}
              aria-label={`${item.year}: ${item.system}`}
            >
              <span className={styles.year}>{item.year}</span>
              <span className={styles.node} aria-hidden="true">
                {item.id === 'aws-cloud-data' ? '★' : ''}
              </span>
              <span className={styles.verbBadge}>{item.verb}</span>
              <span className={styles.system}>{item.system}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Elevated Detail panel */}
      <div className={styles.detailPanel} aria-live="polite" aria-atomic="true">
        {active && (
          <div className={styles.detailGrid}>
            <div className={styles.detailLeft}>
              <span className={styles.detailYearBadge}>{active.year} · {active.verb}</span>
              <h4 className={styles.detailSystemTitle}>{active.system}</h4>
              <span className={styles.detailScope}>{active.scope}</span>
            </div>
            <div className={styles.detailRight}>
              <p className={styles.detailText}>{active.detail}</p>
              <div className={styles.detailImpact}>
                <strong>Executive Impact:</strong> {active.impact}
              </div>
            </div>
          </div>
        )}
      </div>

      <p className={styles.statement}>"{transformationStatement}"</p>
    </section>
  )
}
