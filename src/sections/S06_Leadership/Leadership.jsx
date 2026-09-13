// src/sections/S06_Leadership/Leadership.jsx
import React from 'react'
import { leadershipExamples, leadershipClosing } from '../../data/leadership.js'
import styles from './Leadership.module.css'

const anchorProof = [
  'Leads large, distributed teams',
  'Manages multi-million dollar portfolios',
  'Bridges architecture and delivery',
  'Aligns senior stakeholders',
]

export default function Leadership({ isActive, goTo }) {
  return (
    <section
      id="leadership"
      className={styles.section}
      aria-label="Leadership philosophy and executive decision governance"
    >
      {/* Page header */}
      <div className={styles.pageHeader}>
        <p className={styles.kicker}>06 — Technical Leadership</p>
        <h2 className={styles.heading}>Leading through decisions, clarity, and engineering rigor.</h2>
      </div>

      {/* Main layout */}
      <div className={styles.mainLayout}>

        {/* Left: navy anchor panel */}
        <aside className={styles.anchorPanel}>
          <div className={styles.anchorTopBar} aria-hidden="true" />

          <p className={styles.anchorKicker}>Track record</p>

          <div className={styles.proofList}>
            {anchorProof.map((item) => (
              <div key={item} className={styles.proofItem}>
                <span className={styles.proofDot} aria-hidden="true" />
                <span className={styles.proofText}>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.anchorStatement}>
            <p className={styles.anchorQuote}>
              "{leadershipClosing}"
            </p>
          </div>
        </aside>

        {/* Right: three example cards */}
        <div className={styles.cardsContent}>
          <div className={styles.cards}>
            {leadershipExamples.map((item) => (
              <article key={item.id} className={styles.card} aria-label={item.headline}>
                <span className={styles.eyebrow}>{item.eyebrow}</span>
                <h3 className={styles.headline}>{item.headline}</h3>
                <p className={styles.body}>{item.body}</p>

                <div className={styles.outcomes}>
                  {item.action && (
                    <div className={styles.outcomeLine}>
                      <span className={styles.outcomeLabel}>Action</span>
                      <span className={styles.outcomeText}>{item.action}</span>
                    </div>
                  )}
                  <div className={styles.outcomeLine}>
                    <span className={styles.outcomeLabel}>Outcome</span>
                    <span className={styles.outcomeText}>{item.outcome}</span>
                  </div>
                </div>

                <blockquote className={styles.principle}>
                  "{item.principle}"
                </blockquote>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
