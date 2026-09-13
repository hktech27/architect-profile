// src/sections/S07_WhatsNext/WhatsNext.jsx
import React from 'react'
import { siteConfig } from '../../data/config.js'
import styles from './WhatsNext.module.css'

const valueDimensions = [
  {
    role: 'Architecture & Transformation',
    tag: 'Legacy depth → Modern architecture',
    benefits: [
      'Architected 6 production AWS data pipelines integrating enterprise sources into a reusable cloud data platform.',
      'Makes architecture decisions grounded in operational constraints, not technology preference alone.',
      'Bridges deep legacy knowledge with modern cloud and data architecture without losing critical business context.',
    ]
  },
  {
    role: 'Delivery & Technical Leadership',
    tag: 'Architecture that teams can execute',
    benefits: [
      'Brings engineering depth and program-level delivery perspective to architecture decisions.',
      'Led a $5M transformation portfolio across delivery, governance, risk, budget and stakeholder priorities.',
      'Helps technical teams and management navigate trade-offs and converge on practical decisions.',
    ]
  },
  {
    role: 'Applied AI',
    tag: 'Enterprise context → Practical AI workflows',
    benefits: [
      'Built award-winning agentic AI prototypes that combine enterprise context, specialized agents and human decision-making.',
      'Applies AI to architecture, project knowledge and engineering workflows rather than standalone demos.',
      'Extends cloud and data architecture experience into practical enterprise AI use cases.',
    ]
  }
]

export default function WhatsNext({ isActive, goTo }) {
  const { links } = siteConfig

  return (
    <section
      id="whats-next"
      className={styles.section}
      aria-label="Where Himanshu R Khatri creates value"
    >
      {/* Page header */}
      <div className={styles.pageHeader}>
        <p className={styles.kicker}>07 — Executive Value</p>
        <h2 className={styles.heading}>Where I create the most value.</h2>
      </div>

      {/* Main layout */}
      <div className={styles.mainLayout}>

        {/* Left: navy anchor panel */}
        <aside className={styles.anchorPanel}>
          <div className={styles.anchorTopBar} aria-hidden="true" />

          <p className={styles.anchorKicker}>Three dimensions</p>

          <div className={styles.anchorList}>
            {valueDimensions.map((dim) => (
              <div key={dim.role} className={styles.anchorItem}>
                <span className={styles.anchorDot} aria-hidden="true" />
                <div>
                  <span className={styles.anchorItemLabel}>{dim.role}</span>
                  <span className={styles.anchorItemTag}>{dim.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.anchorStatement}>
            <p className={styles.anchorQuote}>
              I create the most value where architecture, modernization, delivery leadership and practical AI come together.
            </p>
          </div>
        </aside>

        {/* Right: value cards + CTA */}
        <div className={styles.cardsContent}>
          <div className={styles.valueGrid}>
            {valueDimensions.map((dim) => (
              <div key={dim.role} className={styles.valueCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.roleTitle}>{dim.role}</h3>
                  <span className={styles.roleTag}>{dim.tag}</span>
                </div>
                <ul className={styles.benefitsList}>
                  {dim.benefits.map((b, i) => (
                    <li key={i} className={styles.benefitItem}>
                      <span className={styles.checkIcon} aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <div className={styles.footerActions}>
              <a
                href={links.email}
                className={styles.btnPrimary}
                aria-label="Connect with Himanshu R Khatri via Email"
              >
                Start a Conversation ↗
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="LinkedIn">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
