// src/sections/S07_WhatsNext/WhatsNext.jsx
import React from 'react'
import { siteConfig } from '../../data/config.js'
import ResumeButton from '../../components/ResumeButton/ResumeButton.jsx'
import styles from './WhatsNext.module.css'

const valueDimensions = [
  {
    role: 'Architecture & Transformation',
    tag: 'Legacy depth → Modern architecture',
    benefits: [
      'Connects deep legacy-system understanding with modern cloud, data and modernization architecture.',
      'Makes architecture decisions around real operational constraints rather than technology preference alone.',
      'Bridges legacy complexity with modern cloud and data architecture without losing critical business knowledge.',
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
      'Builds agentic AI workflows that combine enterprise context, specialized agents and human decision-making.',
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
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>07 — Executive Value</p>
          <h2 className={styles.heading}>Where I Create the Most Value.</h2>
        </div>
      </div>

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

      <div className={styles.callToActionRow}>
        <p className={styles.aspiration}>
          I create the most value where architecture, modernization, delivery leadership and practical AI come together.
        </p>

        <div className={styles.footerActions}>
          <a
            href={links.email}
            className={styles.btnPrimary}
            aria-label="Connect with Himanshu R Khatri via Email"
          >
            Start a Conversation ↗
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="LinkedIn">LinkedIn ↗</a>
          <ResumeButton variant="primary" label="Download Resume ↓" />
        </div>
      </div>
    </section>
  )
}
