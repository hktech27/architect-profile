// src/sections/S06_Leadership/Leadership.jsx
import React from 'react'
import { leadershipExamples, leadershipProof, leadershipClosing } from '../../data/leadership.js'
import styles from './Leadership.module.css'

export default function Leadership({ isActive, goTo }) {
  return (
    <section
      id="leadership"
      className={styles.section}
      aria-label="Leadership philosophy and executive decision governance"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>06 — Technical Leadership</p>
          <h2 className={styles.heading}>Leading through decisions, clarity, and engineering rigor.</h2>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.leadershipTag}>
            <span>Architecture · Teams · Delivery</span>
          </div>
        </div>
      </div>

      <div className={styles.proofStrip}>
        {leadershipProof}
      </div>

      <div className={styles.cards}>
        {leadershipExamples.map((item) => (
          <article key={item.id} className={styles.card} aria-label={item.headline}>
            <div className={styles.cardTop}>
              <span className={styles.eyebrow}>{item.eyebrow}</span>
            </div>

            <h3 className={styles.headline}>{item.headline}</h3>
            <p className={styles.body}>{item.body}</p>

            <div className={styles.outcomes}>
              {item.action && (
                <p className={styles.outcomeLine}>
                  <span className={styles.outcomeLabel}>Action</span>
                  {item.action}
                </p>
              )}
              <p className={styles.outcomeLine}>
                <span className={styles.outcomeLabel}>Outcome</span>
                {item.outcome}
              </p>
            </div>

            <blockquote className={styles.principle}>
              "{item.principle}"
            </blockquote>
          </article>
        ))}
      </div>

      <p className={styles.closing}>
        "{leadershipClosing}"
      </p>
    </section>
  )
}
